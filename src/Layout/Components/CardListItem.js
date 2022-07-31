import { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { deleteCard, updateDeck } from '../../utils/api/index'

function CardListItem({ currentDeck }){
  
  const { deckId } = useParams()
  const [cards, setCards] = useState([])
  const history = useHistory()

  useEffect(() => {
    
    const readData = async () => {
      try {
        setCards(currentDeck)
      } catch(error) {
        console.log(error.name)
      }
    }
    readData()
  }, [cards, currentDeck])

  const handleDeleteCard = (id) => {
    if (window.confirm("Are you sure you want to delete this Card?")) {
      try{
        deleteCard(id)
        updateDeck(deckId)
        history.go(0)
      } catch(error) {
        console.log(error)
      }
    } 
  }

  return (
    <>
      {cards?.map((card, index) => (
        <div className='card-body list-group-item' key={index}>
          <div key={index} className="row align-items-start">
            <div className="col-6">
              {card.front}
            </div>
            <div className="col-6">
              {card.back}
            </div>
              <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary mr-1 float-right"><span className="oi oi-pencil"></span> Edit</Link>
              <button type="delete" className="btn btn-danger float-right" onClick={() => handleDeleteCard(card.id)}><span className="oi oi-trash"></span></button>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardListItem
