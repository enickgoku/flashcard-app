import React from 'react'
import { useState, useEffect } from 'react'
import { listDecks } from '../../utils/api/index'
import { Link } from 'react-router-dom'
import DeckItem from './DeckItem'


function HomeScreenDeckDisplay() {
  const [decks, setDecks] = useState([])

  useEffect(() => {
    async function getDecks() {
      try {
        const response = await listDecks()
        setDecks(response)
      } catch (error) {
        console.log('There was an error.', error)
      }
    }
    getDecks();
  }, [])

  return (
    <>
      <Link to={`/decks/new`} className="btn btn-secondary mb-2"><span className="oi oi-plus"></span> Create Deck</Link>
      <div className="list-group">
          {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
      </div>
    </>
  )
}

export default HomeScreenDeckDisplay
