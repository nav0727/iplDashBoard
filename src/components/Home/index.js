import {Component} from 'react'

import {Loader} from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

/* const teamsData = [
  {
    name: 'Royal Challengers Bangalore',
    id: 'RCB',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png',
  },
  {
    name: 'Kolkata Knight Riders',
    id: 'KKR',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png',
  },
  {
    name: 'Kings XI Punjab',
    id: 'KXP',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png',
  },
  {
    name: 'Chennai Super Kings',
    id: 'CSK',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/csk-logo-img.png',
  },
  {
    name: 'Rajasthan Royals',
    id: 'RR',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/rr-logo-img.png',
  },
  {
    name: 'Mumbai Indians',
    id: 'MI',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/mi-logo-img.png',
  },
  {
    name: 'Sunrisers Hyderabad',
    id: 'SH',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/srh-logo-img.png',
  },
  {
    name: 'Delhi Capitals',
    id: 'DC',
    teamImageUrl: 'https://assets.ccbp.in/frontend/react-js/dc-logo-img.png',
  },
]  */

class Home extends Component {
  state = {isLoad: true, teamsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const newData = await data.teams
    // console.log(newData)
    const newTeam = newData.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    // console.log(newTeam)

    this.setState({teamsData: newTeam, isLoad: false})
  }

  render() {
    const {teamsData, isLoad} = this.state
    return (
      <div className="bg-container" testid="loader">
        <div className="con1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-img"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>

        <ul className="listul">
          {teamsData.map(each => (
            <TeamCard key={each.id} teamData={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
