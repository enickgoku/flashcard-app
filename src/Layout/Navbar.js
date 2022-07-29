function Navbar({ currentDeck }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li li className="breadcrumb-item"><a href="/"><span className="oi oi-home"></span> Home</a></li>
        <li className="breadcrumb-item active">{currentDeck.name}</li>
        {/* <li class="breadcrumb-item active" aria-current="page">Data</li> */}
        {/* Add conditional for extra active class */ }
         {/* conditional that renders extra list if url is on certain page use useroutematch and route ids */}
      </ol>
    </nav>
  )
}

export default Navbar
