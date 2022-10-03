import JobIcon from "./JobIcon";

function CharacterCard(props: any) {
  return (
    <div className="character-card" data-color={props.color} style={{ borderLeft: `5px solid ${props.color}` }}>
      <div className="character-image" data-crown={props.firstName === "Zenith" && props.lastName === "Wright" ? "" : undefined} style={{ backgroundImage: `url("${props.image}")` }}></div>
      <div className="character-info">
        <div className="character-header">
          <h1>{props.firstName} {props.lastName}</h1>
          <JobIcon job={props.job} />
        </div>
        <div className="character-description">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard;