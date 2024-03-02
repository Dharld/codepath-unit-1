/* eslint-disable react/prop-types */
import "./team.styles.scss";

export const Team = ({ icon, name }) => {
  return (
    
        <div className="team">
            <div className="icon">
                <img src={icon} alt="Team Icon" />
            </div>
            <div className="name">{name}</div>
        </div>
  )
}
