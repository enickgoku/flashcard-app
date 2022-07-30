import { useRouteMatch, Link, useParams } from 'react-router-dom'

function Navbar({ currentDeck = {} }) {
  const match = useRouteMatch()
  const path = match.path
  const { deckId } = useParams()


  return (
    <>
      { deckId && !path.match(/deck/)  ? (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
          <li className="breadcrumb-item active">{currentDeck.name}</li>
        </ol>
      </nav>
      ) : (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
          <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}> {currentDeck.name}</Link></li>
          <li class="breadcrumb-item active" aria-current="page"> Edit Deck</li>
        </ol>
      </nav>
      )}
    </>
  )
}

export default Navbar
