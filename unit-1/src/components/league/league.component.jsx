/* eslint-disable react/prop-types */

import "./league.styles.scss";

export const League = ({ logo, name, teamNumber }) => {
  return (
    <div className="league flex">
        <div className="badge">
            <img src={logo} alt="" />
        </div>
        <div className="name">{ name}</div>
        <div className="teamNumber">{teamNumber}</div>
    </div>
  )
}
