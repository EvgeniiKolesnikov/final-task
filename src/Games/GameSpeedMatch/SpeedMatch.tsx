import { is } from 'immer/dist/internal';
import React, { useState, useEffect, useRef } from 'react';
import Controls from '../../components/Controls/Controls';
import StartGame from '../../components/StartGame/StartGame';
import Cards from './components/Cards/Cards';
import GameStats from '../../components/GameStats/GameStats';
import './SpeedMatch.scss';
import im from '../../assets/success.mp3';
import im1 from '../../assets/rss.svg';
import im2 from '../../assets/puzzle.jpg';
import im3 from '../../assets/puzzle1.JPG';
import im4 from '../../assets/Travel-Mobile.png';

const gameDescription =
  'In Speed Match you only need to determine if the symbols are the same.';
const figures = ['rectangle', 'triangle', 'circle'];

const getNextCard = () => {
  return figures[Math.floor(Math.random() * figures.length)];
};

const t = new Audio(im);
export default function SpeedMatch() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentCard, setCurrentCard] = useState('rectangle');
  const prevCard = useRef('');

  const onPlayHandler = () => {
    setIsStarted(true);
  };

  return (
    <div className="speed-match">
      {!isStarted && (
        <StartGame
          title="SpeedMatch"
          description={gameDescription}
          onPlayHandler={onPlayHandler}
        />
      )}
      <source media="(min-width: )" />
      <img src={im1} alt="" />
      <img src="" alt="" />
      {isStarted && (
        <>
          <GameStats />
          <h2 className="speed-match__title">
            Does the CURRENT card match the card that came IMMEDIATELY BEFORE
            it?
          </h2>
          <Cards currentCard={currentCard} />
          <Controls />
        </>
      )}
    </div>
  );
}
