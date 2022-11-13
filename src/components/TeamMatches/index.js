const TeamMatches = props => {
  const {teamMat} = props
  const {imageUrl, id} = teamMat
  return (
    <div>
      <img src={imageUrl} alt={id} />
    </div>
  )
}

export default TeamMatches
