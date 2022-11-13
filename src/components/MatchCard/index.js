/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class MatchCard extends Component {
  state = {imgUrl: '', latestList: {}, ids: ''}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const imgUrls = await data.team_banner_url

    const latestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    // const recent = data.recent_matches
    //  console.log(data)
    //  console.log(imgUrls)
    console.log(latestMatchDetails)

    this.setState({imgUrl: imgUrls, latestList: latestMatchDetails, ids: id})
  }

  render() {
    const {imgUrl, ids} = this.state
    const {latestList} = this.state
    const {
      umpires,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      result,
    } = latestList
    return (
      <div className={`bg-${ids}`}>
        <img src={imgUrl} alt="iplLogo" className="telugu" />
        <h1 className="he">Latest Matches</h1>
        <div className="bg2">
          <div className="cont2">
            <h2>{competingTeam}</h2>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <div className="cont2">
            <img src={competingTeamLogo} alt={competingTeam} className="tlog" />
          </div>
          <div className="cont3">
            <h2>First Innings</h2>
            <p>{firstInnings}</p>
            <h2>Second Innings</h2>
            <p>{secondInnings}</p>
            <h2>Man Of The Match</h2>
            <p>{manOfTheMatch}</p>
            <h2>Umpires</h2>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchCard
