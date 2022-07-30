import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck } from '../../utils/api/index'

function EditDeckScreen() {
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])

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
      <form>
      <div className='d-flex justify-content-center'>
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type="name" className="form-control" id="name" placeholder={placeHolderOne}/>
          </div>
        </div>
      <div className='d-flex justify-content-center'>
        <div class="form-group">
        <label htmlFor='description'>Description</label>
        <textarea class="form-control" id="description" rows="3" placeholder={placeHolderTwo}></textarea>
        </div>
      </div>
      </form>
      <div className='d-flex justify-content-start'>
        <button className="btn btn-secondary" type="cancel">Cancel</button>
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
    </>
  )
}

export default EditDeckScreen
