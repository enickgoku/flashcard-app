import { useEffect, useState, Link } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { readDeck } from '../../utils/api/index'

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


  return (
    <>
      <h1>Study: {deck.name}</h1>
    </>
  )
}

export default StudyScreen
