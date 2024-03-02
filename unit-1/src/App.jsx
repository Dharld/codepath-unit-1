import './App.scss';
import { League } from './components/league/league.component';
import { Team } from './components/team/team.component';
import Standing from './components/standing/standing.component';
import Scorers from './components/scorers/scorers.component';
import Fixture from './components/fixture/fixture.component';
import { useEffect, useState } from 'react';
import { countries } from './assets/data.js';
import axios from 'axios';

const apiKey = '114a3bb49ad418ed3a0332b1b5547f3ecaf51cf3cc7ed6508064bc49f545aa17';
const INITIAL_STATE = {
  leagues: [],
  fixtures: [],
  standings: [],
  scorers: [],
  teams: [],
  activeLeague: null,
  activeTeam: null,
  isLoadingLeague: true,
  isLoadingTeam: true,
  isLoadingStanding: false,
  isLoadingScorers: true,
};
function App() {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    const leagues = countries.map(({ league: { league_id, league_name, league_season, league_logo, teams } }) => {
      return {
        league_id,
        league_name,
        league_season,
        league_logo,
        teams,
      };
    });

    const activeLeague = leagues[0];
    const teams = activeLeague.teams;
    const activeTeam = leagues[0].teams[0];

    setState((state) => ({
      ...state,
      teams,
      leagues,
      activeTeam,
      activeLeague,
      isLoadingTeam: false,
      isLoadingLeague: false,
    }));
  }, []);

  useEffect(() => {
    const getStanding = async (leagueId) => {
      try {
        const url = `https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${apiKey}`;
        const { data } = await axios.get(url);

        console.log(data);

        const standings = data.map((d) => ({
          name: d.team_name,
          rank: d.overall_league_position,
          l: d.overall_league_L,
          w: d.overall_league_W,
          d: d.overall_league_D,
          pts: d.overall_league_PTS,
          gd: +d.overall_league_GF - +d.overall_league_GA,
        }));

        setState((state) => ({
          ...state,
          standings,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    if (!state.activeLeague) {
      return;
    }

    getStanding(state.activeLeague.league_id);
  }, [state.activeLeague]);

  const changeActiveLeague = (league) => {
    setState((state) => ({
      ...state,
      activeLeague: league,
    }));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="left col--3 bg-component">
          <h3 className="title">Regional Leagues</h3>
          <div className="leagues">
            {state.isLoadingLeague ? (
              <div className="spinner"></div>
            ) : (
              state.leagues.map((l, i) => (
                <League key={i} name={l.league_name} logo={l.league_logo} onClick={() => changeActiveLeague(l)} />
              ))
            )}
          </div>
          <h3 className="title">Regional Leagues</h3>
          <div className="teams">
            {state.isLoadingTeam ? (
              <div className="spinner"></div>
            ) : (
              state.teams.map((t, i) => <Team key={i} name={t.team_name} teamNumber={20} icon={t.team_badge} />)
            )}
          </div>
        </div>
        <main className="main bg-component">
          <div className="fixtures">{state.fixtures && state.fixtures.map((f, i) => <Fixture key={i} {...f} />)}</div>
        </main>
        <div className="right  col--3">
          <div className="space bg-component">{state.standings && <Standing teams={state.standings} />}</div>
          <div className="second space bg-component">{state.scorers && <Scorers scorers={state.scorers} />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
