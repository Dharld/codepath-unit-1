import './App.scss';
import leagueIcon from './assets/icons/leagueIcon@2x.png';
import teamIcon from "./assets/icons/inter@2x.png";
import teamBigIcon from "./assets/icons/inter@3x.png";
import { League } from './components/league/league.component';
import { Team } from './components/team/team.component';
import Standing from './components/standing/standing.component';
import Scorers from './components/scorers/scorers.component';
import Fixture from './components/fixture/fixture.component';

const teams = new Array(20).fill({
  rank: 1,
  name: "Inter Milan",
  w: 5,
  l: 4,
  d: 3,
  gd: 2,
  pts: 1,
  icon: teamIcon
});

const scorers = new Array(5).fill({
  rank: 1,
  player: "Lautaro",
  club: "Inter Milan XXXXXXX",
  goals: 35
});

const fixtures = new Array(15).fill({
  league: "Serie A",
  week: 23,
  date: "2020-01-01",
  home: {
    team: "Inter Milan",
    icon: teamBigIcon
  },
  away: {
    team: "Inter Milan",
    icon: teamBigIcon
  }
})
function App() {

  return (
    <div className='App'>
      <div className="container">
        <div className="left col--3 bg-component">
          <h3 className='title'>Regional Leagues</h3>
          <div className="leagues">
            <League name="Serie A Italian" teamNumber={20} logo={leagueIcon}/>
            <League name="Serie A Italian" teamNumber={20} logo={leagueIcon}/>
            <League name="Serie A Italian" teamNumber={20} logo={leagueIcon}/>
            <League name="Serie A Italian" teamNumber={20} logo={leagueIcon}/>
            <League name="Serie A Italian" teamNumber={20} logo={leagueIcon}/>
            <League name="Serie A Italian" teamNumber={20} logo={leagueIcon}/>
            <League name="Serie A Italian" teamNumber={20} logo={leagueIcon}/>
          </div>
          <h3 className='title'>Regional Leagues</h3>
          <div className="teams">
            <Team name="Inter Milan" icon={teamIcon}/>
            <Team name="Inter Milan" icon={teamIcon}/>
            <Team name="Inter Milan" icon={teamIcon}/>
            <Team name="Inter Milan" icon={teamIcon}/>
            <Team name="Inter Milan" icon={teamIcon}/>
          </div>
        </div>
        <main className='main bg-component'>
          <div className="fixtures">
            { fixtures.map((f, i) => <Fixture key={i} {...f}/>)}
           
          </div>
        </main>
        <div className="right  col--3">
          <div className="space bg-component">
            <Standing teams={teams}/>
          </div>
          <div className="second space bg-component">
            <Scorers scorers={scorers}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
