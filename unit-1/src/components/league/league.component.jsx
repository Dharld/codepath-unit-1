/* eslint-disable react/prop-types */
import './league.styles.scss';

export const League = ({ logo, name, onClick }) => {
  return (
    <div className="league flex" onClick={onClick}>
      <div className="badge">
        <img src={logo} alt="" />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};
