/* eslint-disable react/prop-types */
import "./scorers.styles.scss";

const Line = ({ rank, player, club, goals}) => (
    <tr className="line">
        <td className='pos w-4ch ta-center'>{rank}</td>
        <td className='fill'>{player}</td>
        <td className="w-8ch">{club}</td>
        <td className="w-5ch ta-center">{goals}</td>   
    </tr>
);

const Scorers = ({ scorers }) => {
    return (
        <>
            <h3 className='title'>League Top 5 Scorers</h3>
            <table className="scorers">
                <thead>
                    <tr>
                        <th className="w-4ch">Rank</th>
                        <th className='fill'>Player</th>
                        <th className="w-8ch">Club</th>
                        <th className="w-5ch">Goals</th>
                    </tr>
                </thead>
                <tbody>
                    { scorers.map((t,i) => <Line key={i} {...t}/>)}
                </tbody>
          </table>
        </>
        
    );
}

export default Scorers;