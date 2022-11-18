/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import './index.css'
import TeamMatches from '../TeamMatches'

class MatchCard extends Component {
  state = {imgUrl: '', latestList: {}, ids: '', matchTeam: [], isLoad: true}

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
    const teamsLists = await data.recent_matches

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
    //  console.log(latestMatchDetails)
    //  console.log(teamsLists)

    const matchTeams = teamsLists.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
      result: each.result,
      id: each.id,
    }))

    console.log(matchTeams)

    this.setState({
      imgUrl: imgUrls,
      latestList: latestMatchDetails,
      ids: id,
      matchTeam: matchTeams,
      isLoad: false,
    })
  }

  renderLatestMatch = async () => {
    const {latestList} = this.state
    return latestList.map(each => (
      <LatestMatch key={each.id} latestMat={each} />
    ))
  }

  render() {
    const {imgUrl, ids} = this.state
    const {latestList, matchTeam, isLoad} = this.state
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
      <div>
        {isLoad ? (
          <div testid="loader">
            <Loader type="Oval" height={50} width={50} />
          </div>
        ) : (
          <div className={`bg-${ids}`}>
            <img src={imgUrl} alt="team banner" className="telugu" />
            <p className="he">Latest Matches</p>

            <div className="bg2">
              <div className="cont1">
                <div className="cont2">
                  <p>{competingTeam}</p>
                  <p>{date}</p>
                  <p>{venue}</p>
                  <p>{result}</p>
                </div>
                <div className="cont2">
                  <img
                    src={competingTeamLogo}
                    alt={`latestmatch${competingTeam}`}
                    className="tlog"
                  />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="cont3">
                <p>First Innings</p>
                <p>{firstInnings}</p>
                <p>Second Innings</p>
                <p>{secondInnings}</p>
                <p>Man Of The Match</p>
                <p>{manOfTheMatch}</p>
                <p>Umpires</p>
                <p>{umpires}</p>
              </div>
            </div>

            <ul className="ul-list">
              {matchTeam.map(each => (
                <TeamMatches key={each.id} teamMat={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default MatchCard
