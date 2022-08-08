import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck, createCard } from '../../utils/api'
import Navbar from '../Navbar'

function AddCardScreen() {
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])
  const history = useHistory()

  const initialFormData = {
    front: "",
    back: "",
  }

  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    const getDeckInfo = async () => {
      try{
        const response = await readDeck(deckId)
        return setDeck(response)
      } catch (error) {
        console.log(error)
      }
    }
    getDeckInfo()
  }, [deckId])

  const handleChange = async ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    createCard(deckId, formData)
    .then(setFormData(initialFormData))
    history.push(`/decks/${deckId}`)
  }

  return (
    <>
      <Navbar currentDeck={deck} />
      <h1>{deck.name}: Add Card</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='front'>Front</label>
          <textarea type="text" name="front" className="form-control form-control-lg" id="front" placeholder="Front side of card." value={formData.front} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor='back'>Back</label>
          <textarea type="text" name="back" className="form-control form-control-lg" id="back" rows="3" placeholder="Back side of card." value={formData.back} onChange={handleChange}/>
        </div>
        <div className='d-flex'>
          <a href={`/decks/${deckId}`} className="btn btn-secondary mr-1" type="cancel">Cancel</a>
          <button className="btn btn-primary" type="submit">Save</button>
        </div>
      </form>
    </>
  )
}

export default AddCardScreen
