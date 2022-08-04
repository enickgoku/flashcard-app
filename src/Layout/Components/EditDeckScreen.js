import Navbar from '../Navbar'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck, updateDeck } from '../../utils/api/index'

function EditDeckScreen() {
  const history = useHistory()
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])

  useEffect(() => {
    const getDeck = async () => {
      
      try {
        const response = await readDeck(deckId)
        setDeck(response)
      } catch (error) {
        console.log(error)
      }
    }
    getDeck()
  }, [deckId])

  let initialFormData = {
    id: deckId,
    name: "",
    description: "",
  }

  const [formData, setFormData] = useState(initialFormData)
  
  const handleChange = async (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    updateDeck(formData)
    .then((updatedDeck) => history.push(`/decks/${updatedDeck?.id}`))
    .then(setFormData(initialFormData))
  }

  const placeHolderOne = deck?.name
  const placeHolderTwo = deck?.description

  return (
    <>
      <Navbar currentDeck={deck} />
      <h1>Edit Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type="text" name="name" className="form-control form-control-lg" id="name" placeholder={placeHolderOne} value={formData.name} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor='description'>Description</label>
          <textarea type="text" name="description" className="form-control form-control-lg" id="description" rows="3" placeholder={placeHolderTwo} value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className='d-flex'>
          <a href={`/decks/${deckId}`} className="btn btn-secondary mr-1" type="cancel">Cancel</a>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default EditDeckScreen
