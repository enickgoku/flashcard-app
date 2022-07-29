import { useEffect, useState } from 'react'

function CardListItem({currentDeck}){
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
  
  return (
    <>
      {cards.map((card, index) => (
        <div key ={index} className="row align-items-start">
          <div className="col">
            hi
          </div>
          <div className="col">
            hi
          </div>
        </div>
      ))}
    </>
  )
}

export default CardListItem
