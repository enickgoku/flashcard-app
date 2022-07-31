import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck } from '../../utils/api'
import Navbar from '../Navbar'

function AddCardScreen() {
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])

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

  return (
    <>
      <Navbar currentDeck={deck} />
      <h1>{deck.name}: Add Card</h1>
      <form>
        <div className="form-group">
          <label htmlFor='front'>Back</label>
          <textarea type="text" name="front" className="form-control form-control-lg" id="front" placeholder="Front side of card." value={formData.front}/>
        </div>
        <div class="form-group">
          <label htmlFor='back'>Back</label>
          <textarea type="text" name="back" className="form-control form-control-lg" id="back" rows="3" placeholder="Back side of card." value={formData.back}/>
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
