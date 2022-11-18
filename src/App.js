import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
// import TeamMatches from './components/TeamMatches'
import './App.css'
// import TeamCard from './components/TeamCard'
import MatchCard from './components/MatchCard'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={MatchCard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
