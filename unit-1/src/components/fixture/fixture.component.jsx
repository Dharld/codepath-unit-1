/* eslint-disable react/prop-types */
import './fixture.styles.scss';

const Fixture = ({ stadium, date, home: { icon: icon1, name: name1 }, away: { icon: icon2, name: name2 } }) => {
  return (
    <div className="fixture">
      <div className="title"> {stadium}</div>
      <div className="date">{date}</div>
      <div className="vs">
        <div className="op">
          <img src={icon1} alt="" />
          <div className="team-name">{name1}</div>
        </div>
        <div className="sign">VS</div>
        <div className="op">
          <img src={icon2} alt="" />
          <div className="team-name">{name2}</div>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
