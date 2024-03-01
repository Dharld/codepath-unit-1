import './App.scss';
import leagueIcon from './assets/icons/leagueIcon@2x.png';
import { League } from './components/league/league.component';

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
        </div>
        <main className='main bg-component'></main>
        <div className="right col--3 bg-component"></div>
      </div>
    </div>
  )
}

export default App
