import { useRouteMatch, Link, useParams } from 'react-router-dom'

function Navbar({ currentDeck = {} }) {
  const { deckId } = useParams()
  const match = useRouteMatch()
  const path = match.path
  const pathMatch = !path.includes('/study')
  const pathMatchTwo = !path.includes('/edit')
  const pathMatchThree = !path.includes('/new')
  const pathMatchFour = path.includes('/cards')
  const pathMatchFive = path.includes('/decks')


  return (
    <>
      { pathMatch && pathMatchTwo && pathMatchThree ? (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
          <li className="breadcrumb-item active">{currentDeck?.name}</li>
        </ol>
      </nav>
      ) : (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"></span> Home</Link></li>
          <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}> {currentDeck?.name}</Link></li>
          {pathMatchFour && !pathMatchTwo ? (
            <li className="breadcrumb-item active" aria-current="page"> Edit Card</li>
          ) : (
            <li className="breadcrumb-item active" aria-current="page"> Edit Deck</li>
          )}
        </ol>
      </nav>
      )}
    </>
  )
}

export default Navbar
