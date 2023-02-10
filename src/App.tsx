import React from 'react';
import './App.scss';
import SpeedMatch from './Games/GameSpeedMatch/SpeedMatch';
import { Route, Routes } from 'react-router-dom';
import GameStats from './components/GameStats/GameStats';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">home NavLink</NavLink>
          </li>
          <li>
            <NavLink to="/s">SpeedMatch NavLink</NavLink>
          </li>
          <li>
            <NavLink to="/#s">#SpeedMatch NavLink</NavLink>
          </li>
          <li>
            <Link to="./Games/GameSpeedMatch/SpeedMatch.tsx">Link long</Link>
          </li>
          <li>
            <Link to="/s">Link /s</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<GameStats />} />
        <Route path="/s" element={<SpeedMatch />} />
        <Route path="/#s" element={<SpeedMatch />} />
      </Routes>
      {/* <div>/final-task/s</div> */}
      {/* <NavLink to={'./components/Card/Card.tsx'}>nav</NavLink> */}
    </>
  );
}

export default App;
