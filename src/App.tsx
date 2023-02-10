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
            <NavLink to="/">NavLink - /</NavLink>
          </li>
          <li>
            <NavLink to="/speedmatch">NavLink - /speedmatch</NavLink>
          </li>

          <li>
            <Link to="/">Link - /</Link>
          </li>
          <li>
            <Link to="/speedmatch">Link - /speedmatch</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<GameStats />} />
        <Route path="/speedmatch" element={<SpeedMatch />} />
        <Route path="/#speedmatch" element={<SpeedMatch />} />
      </Routes>
    </>
  );
}

export default App;
