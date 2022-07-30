import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck, updateDeck } from '../../utils/api/index'

function EditDeckScreen() {
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])

  const initialFormData = {
    name: "",
    description: "",
  }

  const [formData, setFormData] = useState(initialFormData)
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateDeck(formData)
    setFormData(initialFormData)
  }


  const placeHolderOne = deck?.name
  const placeHolderTwo = deck?.description

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

  return (
    <>
      <Navbar currentDeck={deck} />
      <h1>Edit Deck</h1>
      <form className='form-group' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input type="name" className="form-control form-control-lg" id="name" placeholder={placeHolderOne} value={formData.name} onChange={handleChange}/>
          </div>
          <div class="form-group">
            <label htmlFor='description'>Description</label>
            <textarea className="form-control form-control-lg" id="description" rows="3" placeholder={placeHolderTwo} value={formData.description} onChange={handleChange}></textarea>
          </div>
      </form>
        <div className='d-flex'>
          <a href={`/decks/${deckId}`} className="btn btn-secondary mr-1" type="cancel">Cancel</a>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
    </>
  )
}

export default EditDeckScreen
