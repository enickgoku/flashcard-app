import { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { readDeck } from '../../utils/api/index'
import Navbar from '../Navbar'

function StudyScreen() {
  const history = useHistory()
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    const getAndSetDeck = async () => {
      const response = await readDeck(deckId)
      const isValid = response.cards.length >= 3
      setDeck({
        ...response,
        isValid: isValid,
      })
      setCards({
        ...response.cards,
        isFlipped: false,
      })
    }
    getAndSetDeck()
  }, [deckId])

  if(deck.isValid === false) {
    return (
      <>
        <Navbar currentDeck={deck} />
        <h1>{deck.name}: Study</h1>
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study.  There are {cards.length} in this deck.</p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-1"><span className="oi oi-plus"></span> Add Cards</Link>
      </>
    )
  } else {
    return (
      <>
        <h1>Study: {deck.name}</h1>
      </>
    )
  }
}

export default StudyScreen
