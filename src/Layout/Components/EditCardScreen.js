import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { readCard, readDeck, updateCard } from '../../utils/api/index'
import Navbar from '../Navbar'

function EditCardScreen() {
  const { deckId, cardId } = useParams()
  const history = useHistory()
  const [currentDeck, setCurrentDeck] = useState([])

  const [formData, setFormData] = useState({
    id: +cardId,
    deckId: +deckId,
    front: "",
    back: "",
  })

  useEffect(() => {
    const getDeck = async () => {
      const response = await readDeck(deckId)
      setCurrentDeck(response)
    }

    const getCard = async () =>
      readCard(cardId)
        .then(card => {
          setFormData({
            id: +cardId,
            deckId: +deckId,
            front: card.front,
            back: card.back,
          })
        }
      )

    getDeck()
    getCard()
  }, [cardId, deckId])

  const handleChange = async ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await updateCard(formData)
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
          <textarea type="text" name="front" className="form-control form-control-lg" id="front" placeholder="Front of card" value={formData.front} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor='back'>Back</label>
          <textarea type="text" name="back" className="form-control form-control-lg" id="back" rows="3" placeholder="Back of card" value={formData.back} onChange={handleChange} />
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
