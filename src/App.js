import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
// import TeamMatches from './components/TeamMatches'
import './App.css'
// import TeamCard from './components/TeamCard'
import MatchCard from './components/MatchCard'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={MatchCard} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
