function Navbar({ currentDeck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li li className="breadcrumb-item"><a href="/"><span className="oi oi-home"></span> Home</a></li>
        <li className="breadcrumb-item active">{currentDeck.name}</li>
        {/* <li class="breadcrumb-item active" aria-current="page">Data</li> */}
        {/* Add conditional for extra active class */}
      </ol>
    </nav>
  )
}

export default Navbar
