/* eslint-disable react/prop-types */
import "./standing.styles.scss";

const Line = ({ rank, name, w, d, l, gd, pts}) => (
    <tr className="line">
        <td className='pos'>{rank}</td>
        <td className='fill'>{name}</td>
        <td>{w}</td>
        <td>{d}</td>
        <td>{l}</td>
        <td>{gd}</td>
        <td>{pts}</td>
    </tr>
);

const Standing = ({ teams }) => {
    return (
        <>
            <h3 className='title'>Serie A Standing</h3>
            <table className="standing">
            <thead>
              <tr>
                <th>Pos</th>
                <th className='fill'>Team</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              { teams.map((t,i) => <Line key={i} {...t}/>)}
            </tbody>
          </table>
        </>
        
    );
}

export default Standing;
