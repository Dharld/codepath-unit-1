/* eslint-disable react/prop-types */
import './team.styles.scss';

export const Team = ({ icon, name, onClick }) => {
  return (
    <div className="team" onClick={onClick}>
      <div className="icon">
        <img src={icon} alt="Team Icon" />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};
