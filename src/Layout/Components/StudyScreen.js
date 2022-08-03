import { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { readDeck } from '../../utils/api/index'
import Navbar from '../Navbar'

function StudyScreen() {
  const { deckId } = useParams()
  const [deck, setDeck] = useState([])
  const [front, setFront] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const history = useHistory()

  useEffect(() => {
    const getAndSetDeck = async () => {
      
      try {
        const response = await readDeck(deckId)
        setDeck(response)
      } catch (error) {
        console.log(error)
      }
    }
    getAndSetDeck()
  }, [deckId])
  
  const { cards } = deck

  console.log(deck)

  const nextButtonHandler = () => {
    if(currentIndex < cards?.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setFront(true)
    } else{
      if(
        window.confirm("Restart cards?  Click cancel to return to the home screen.")
      ) {
        setCurrentIndex(0)
        setFront(true)
      } else{
        history.push('/')
      }
    }
  }

  const flipButton = () => {
    setFront(!front)
  }

  const renderView = (
    <div className="card border-primary mb-3">
    <div className="card-body">
      
      <h4 className="card-title">
        Card {currentIndex + 1} of 
      </h4>
   
      <p className="card-text">
        {front ? cards[currentIndex].front : cards[currentIndex]?.back}
      </p>
     
      <button onClick={flipButton}>Flip</button>
      
      {!front ? <button onClick={nextButtonHandler}>Next</button> : null}
    </div>
  </div>
  )
  //redner a card
  //we need index and front of that index
  //flip one card
  //we need the index, and back of that index.
  //redner the back
  //show next card
  //we need next index and next front of next index.

  if(cards.length <= 2) {
    return (
      <>
        <Navbar currentDeck={deck} />
        <h1>{deck.name}: Study</h1>
        <h2>Not enough cards.</h2>
        <p>You need at least 3 cards to study.  There are {deck?.cards?.length} in this deck.</p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-1"><span className="oi oi-plus"></span> Add Cards</Link>
      </>
    )
  } else {
    return (
      <>
        <Navbar currentDeck={deck} />
        {renderView}
      </>
    )
  }
}

export default StudyScreen
