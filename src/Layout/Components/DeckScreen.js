import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck } from '../../utils/api/index'
import Navbar from '../Navbar'
import CardItem from './CardItem'

function DeckScreen() {
  const { deckId } = useParams()
  const [currentDeck, setCurrentDeck] = useState([])

  useEffect(() => {
    async function getCurrentDeck() {
      const response = await readDeck(deckId)
      setCurrentDeck(response)
    }
    getCurrentDeck()
  }, [deckId])
  return (
    <>
      <Navbar currentDeck={currentDeck} />
      <h1 className='d-flex justify-content-start'>{currentDeck.name}</h1>
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <p className="mb-1 d-flex justifiy-content-center">{currentDeck.description}</p>
        <div className='d-flex'>
          <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary mr-1"><span className="oi oi-pencil"></span> Edit</Link>
          <Link to={`/decks/${deckId}/study`} className="btn btn-primary"><span className="oi oi-book"></span> Study</Link>
          <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-1"><span className="oi oi-plus"></span> Add Cards</Link>
          <button type="delete" className="btn btn-danger ml-auto"><span className="oi oi-trash"></span></button>
        </div>
      </div>
      <h1 className='mt-2'>Cards</h1>
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <CardItem currentDeck={currentDeck.cards} />
      </div>
    </>
  )
}

export default DeckScreen
