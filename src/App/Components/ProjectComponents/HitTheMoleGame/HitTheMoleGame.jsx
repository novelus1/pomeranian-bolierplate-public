import React, { useState, useEffect } from 'react';
import MoleGameSettings from './HitTheMoleGameSettings/HitTheMoleGameSettings.jsx';
import MoleGameBoard from './HitTheMoleGameBoard/HitTheMoleGameBoard.jsx';
import formatTime from '../../../Helpers/formatTime.jsx';
import whackSound from '../../../Sounds/MoleGame/whack.mp3';
import victorySound from '../../../Sounds/MoleGame/victory.mp3'
import './HitTheMoleGame.css';

const defaultGameTime = 1 * 60;
const moleSpeed = 1000;
const defaultArrayState = Array(10).fill({
  isVisible: false,
  isWhacked: false,
});

export const HitTheMoleGame = () => {

  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [timer, setTimer] = useState(gameTime);
  const [gameStarted, setGameStarted] = useState(false);
  const [moleArray, setMoleArray] = useState(defaultArrayState);
  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [winTime, setWinTime] = useState(null);
  const [whackAudio] = useState(new Audio(whackSound));
  whackAudio.preload = 'auto';
  const [victoryAudio] = useState(new Audio(victorySound));
  victoryAudio.preload = 'auto';
  useEffect(() => {
    setMoleArray(defaultArrayState);
  }, [moleCount]);

  useEffect(() => {
    setTimer(gameTime);
  }, [gameTime]);

  useEffect(() => {
    let interval;
    if (!interval) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setGameStarted(false);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, gameStarted]);

  useEffect(() => {
    let intervalId;

    if (gameStarted) {
      intervalId = setInterval(showRandomMole, moleSpeed);
    }

    return () => clearInterval(intervalId);
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted && scoreCount === 10) {
      setTimer(gameTime);
      setGameStarted(false);
      setWinTime(gameTime - timer);

      victoryAudio.currentTime = 0;
      victoryAudio.play();

    }
  }, [scoreCount, gameStarted, gameTime, timer]);

  const hitTheMole = (index) => {
    if (moleArray[index].isVisible) {
      setScoreCount((prevScore) => prevScore + 1);

      whackAudio.currentTime = 0;
      whackAudio.play();

      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isVisible = false;
        return newArray;
      });
    }
  };

  const showRandomMole = () => {
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomIndices = [];

    while (randomIndices.length < moleCount) {
      const randomIndex = getRandom(0, moleArray.length - 1);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const newMole = { ...mole };
        newMole.isVisible = randomIndices.includes(index);
        return newMole;
      })
    );
  };

  const startGame = () => {
    setGameStarted(true);
    setScoreCount(0);
    setTimer(gameTime);
  };

  const restartGame = () => {
    setGameStarted(false);
    setTimer(defaultGameTime / 1000);
    setMoleCount(1);
    setScoreCount(0);
    setMoleArray(defaultArrayState);
  };

  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        setGameTime={setGameTime}
        timer={timer}
        moleCount={moleCount}
        setMoleCount={setMoleCount}
        gameStarted={gameStarted}
        startGame={startGame}
        restartGame={restartGame}
        scoreCount={scoreCount}
        formatTime={formatTime}
        winTime={winTime}
      />
      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
        gameStarted={gameStarted}
        timer={timer}
        restartGame={restartGame}
      />
    </>
  );
};
