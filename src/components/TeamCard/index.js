import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, teamImageUrl, id} = teamData

  return (
    <Link to={`/team-matches/${id}`} style={{textDecoration: 'none'}}>
      <li className="list-container">
        <img src={teamImageUrl} alt={name} className="logos" />

        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
