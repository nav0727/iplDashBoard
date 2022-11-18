import {Link} from 'react-router-dom'

import './index.css'

const TeamMatches = props => {
  const {teamMat} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = teamMat

  if (matchStatus === 'Won') {
    const IsTrue = true
    console.log(IsTrue)
  }

  return (
    <Link to="/" style={{textDecoration: 'none'}}>
      <li className="list-con">
        <div className="cont5">
          <img
            src={competingTeamLogo}
            alt={`latestmatch ${competingTeam}`}
            className="teamLogo"
          />
          <p>{competingTeam}</p>
          <p>{result}</p>
          <p className={matchStatus === 'Won' ? 'red' : 'green'}>
            {matchStatus}
          </p>
        </div>
      </li>
    </Link>
  )
}

export default TeamMatches
