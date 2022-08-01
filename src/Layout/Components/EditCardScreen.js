import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { readCard, readDeck } from '../../utils/api/index'
import Navbar from '../Navbar'

function EditCardScreen() {
  const { deckId, cardId } = useParams()
  const history = useHistory()
  const [currentDeck, setCurrentDeck] = useState([])
  const [card, setCard] = useState([])

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

  return (
    <>
      <Navbar currentDeck={currentDeck} />
      <h1>Edit Card</h1>
      <form>
        <div className="form-group">
          <label htmlFor='front'>Front</label>
          <textarea type="text" name="front" className="form-control form-control-lg" id="front" placeholder={card.front}/>
        </div>
        <div class="form-group">
          <label htmlFor='back'>Back</label>
          <textarea type="text" name="back" className="form-control form-control-lg" id="back" rows="3" placeholder={card.back}/>
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
