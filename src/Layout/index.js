import React from "react"
import { Switch, Route } from 'react-router-dom'
import HomeScreenDeckDisplay from "./Components/HomeScreenDeckDisplay"
import StudyScreen from './Components/StudyScreen'
import CreateDeckScreen from './Components/CreateDeckScreen'
import AddCardScreen from './Components/AddCardScreen'
import EditCardScreen from './Components/EditCardScreen'
import DeckScreen from './Components/DeckScreen'
import EditDeckScreen from './Components/EditDeckScreen'
import Header from "./Header"
import NotFound from "./NotFound"

function Layout() {
  
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path={`/`}>
            <HomeScreenDeckDisplay decks />
          </Route>
          <Route path={'/decks/:deckId/study'}>
            <StudyScreen />
          </Route>
          <Route path={'/decks/new'}>
            <CreateDeckScreen />
          </Route>
          <Route path={'/decks/:deckId'}>
            <DeckScreen />
          </Route>
          <Route path={'/decks/:deckId/edit'}>
            <EditDeckScreen />
          </Route>
          <Route path={'/decks/:deckId/cards/new'}>
            <AddCardScreen />
          </Route>
          <Route path={'/decks/:deckId/cards/:cardId/edit'}>
            <EditCardScreen />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Layout
