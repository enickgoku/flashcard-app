import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { readDeck } from '../../utils/api/index'

function EditDeckScreen() {
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

  return (
    <>
      <Navbar currentDeck={deck} />
      <h1>Hi</h1>
    </>
  )
}

export default EditDeckScreen
