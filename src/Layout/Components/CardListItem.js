import { useEffect, useState } from 'react'

function CardListItem({ currentDeck }){
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
  console.log(cards)
  return (
    <>
      {cards?.map((card, index) => (
        <div className='card list-group-item list-group-item-action'>
          <div key ={index} className="row align-items-start">
            <div className="col">
              {card.front}
            </div>
            <div className="col">
              {card.back}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CardListItem
