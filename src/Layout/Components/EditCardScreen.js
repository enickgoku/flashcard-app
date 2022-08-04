import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { readCard, readDeck, updateCard } from '../../utils/api/index'
import Navbar from '../Navbar'

function EditCardScreen() {
  const { deckId, cardId } = useParams()
  const history = useHistory()
  const [currentDeck, setCurrentDeck] = useState([])
  const [card, setCard] = useState([])

  const initialFormData = {
    id: cardId,
    front: "",
    back: "",
    deckId: parseInt(deckId),
  }

  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    const getDeck = async () => {
      const response = await readDeck(deckId)
      setCurrentDeck(response)
    }
    getDeck()
  }, [deckId])

  useEffect(() => {
    const getCard = async () => {
      const currentCard = await readCard(cardId)
      setCard(currentCard)
    }
    getCard()
  }, [cardId])

  const handleChange = async ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await updateCard(formData)
    .then(setFormData(initialFormData))
    history.push(`/decks/${deckId}`)
    return response
  }

  return (
    <>
      <Navbar currentDeck={currentDeck} />
      <h1>Edit Card</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='front'>Front</label>
          <textarea type="text" name="front" className="form-control form-control-lg" id="front" placeholder={card.front} value={formData.front} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor='back'>Back</label>
          <textarea type="text" name="back" className="form-control form-control-lg" id="back" rows="3" placeholder={card.back} value={formData.back} onChange={handleChange} />
        </div>
        <div className='d-flex'>
          <a href={`/decks/${deckId}`} className="btn btn-secondary mr-1" type="cancel">Cancel</a>
          <button className="btn btn-primary" type="submit">Save</button>
        </div>
      </form>
    </>
  )
}

export default EditCardScreen
