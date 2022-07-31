import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck } from '../../utils/api'
import Navbar from '../Navbar'

function AddCardScreen() {
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])

  useEffect(() => {
    const getDeckInfo = async () => {
      const response = await readDeck(deckId)
      return setDeck(response)
    }
    getDeckInfo()
  }, [deckId])

  return (
    <>
      <Navbar currentDeck={deck} />
      <h1>{deck.name}: Add Card</h1>
    </>
  )
}

export default AddCardScreen
