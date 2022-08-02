import Navbar from "../Navbar"

function CreateDeckScreen() {
  return (
    <>
      <Navbar />
      <h1>Create Deck</h1>
      <form>
        <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type="text" name="name" className="form-control form-control-lg" id="name" placeholder="Deck Name"/>
        </div>
        <div class="form-group">
          <label htmlFor='description'>Description</label>
          <textarea type="text" name="description" className="form-control form-control-lg" id="description" rows="3" placeholder="Brief description of the deck."></textarea>
        </div>
        <div className='d-flex'>
          <a href={`/decks`} className="btn btn-secondary mr-1" type="cancel">Cancel</a>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default CreateDeckScreen
