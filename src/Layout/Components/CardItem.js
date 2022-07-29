import { useState } from "react"
import CardListItem from "./CardListItem"

function CardItem({currentDeck}) {
  return (
    <>
      <div className="d-flex justify-content-around">
        <h4>Question</h4>
        <h4>Answer</h4>
      </div>
      <div className="card">
        <div class="card-body">
          <CardListItem currentDeck={currentDeck} />
        </div>
      </div>
    </>
  )
}

export default CardItem
