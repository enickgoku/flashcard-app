import { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import { deleteCard } from '../../utils/api/index'

function CardListItem({ currentDeck }){
  
  const { deckId } = useParams()
  const [cards, setCards] = useState([])

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
      deleteCard(id)
      window.location.reload(true)
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
            <div className='d-flex'>
              <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary mr-1"><span className="oi oi-pencil"></span> Edit</Link>
              <button type="delete" className="btn btn-danger" onClick={() => handleDeleteCard(card.id)}><span className="oi oi-trash"></span></button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardListItem
