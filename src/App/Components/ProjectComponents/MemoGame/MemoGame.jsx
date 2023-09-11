import React, { useEffect, useState } from 'react';
import './MemoGame.css';
import MemoGameCardList from './MemoCardList/MemoCardList';
import { MemoCard } from './MemoCard/MemoCard';
import { MemoDifficultyButtons } from './MemoDifficultyButtons/MemoDifficultyButtons';
import formatTime from '../../../Helpers/formatTime';
import shuffleSound from '../../../Sounds/MemoGame/shuffle.mp3';
import wrongMatchSound from '../../../Sounds/MemoGame/wrongmatch.mp3';
import correctMatchSound from '../../../Sounds/MemoGame/correctmatch.mp3';
import fanfareSound from '../../../Sounds/MemoGame/fanfare.mp3';


const fanfareAudio = new Audio(fanfareSound);
const shuffleAudio = new Audio(shuffleSound);
const wrongMatchAudio = new Audio(wrongMatchSound);
const correctMatchAudio = new Audio(correctMatchSound);

export function MemoGame() {
  const [cards, setCards] = useState([]);
  const [difficulty, setDifficulty] = useState('normal');
  const [turns, setTurns] = useState(0);
  const [chooseCardOne, setChooseCardOne] = useState(null);
  const [chooseCardTwo, setChooseCardTwo] = useState(null);
  const [cardChoiceDisabled, setCardChoiceDisabled] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [matchedCardsCount, setMatchedCardsCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [activeDifficulty, setActiveDifficulty] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [];
    shuffleAudio.play()
    const maxCardCount = {
      normal: 6,
      medium: 12,
      hard: 18,
    }[difficulty];

    const availableCards = MemoGameCardList.slice(0, maxCardCount);

    while (shuffledCards.length < maxCardCount) {
      const randomIndex = Math.floor(Math.random() * availableCards.length);
      const card = availableCards[randomIndex];

      shuffledCards.push({ ...card, id: shuffledCards.length });
      shuffledCards.push({ ...card, id: shuffledCards.length });

      availableCards.splice(randomIndex, 1);
    }

    shuffledCards.sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setTurns(0);
    setGameStarted(true);
    setGameWon(false);
    setMatchedCardsCount(0);
    setStartTime(new Date());
  };

  const startGame = () => {
    shuffleCards();
    setTimer(0);
    setTurns(0);
  };

  const handleCardChoice = (card) => {
    if (card.id === chooseCardOne?.id || cardChoiceDisabled) return;
    if (chooseCardOne) {
      setChooseCardTwo(card);
      setCardChoiceDisabled(true);
      setTurns(turns + 1);

      if (chooseCardOne.src === card.src) {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.src === card.src ? { ...c, matched: true } : c
            )
          );
          setMatchedCardsCount(matchedCardsCount + 2);
          setChooseCardOne(null);
          setChooseCardTwo(null);
          setCardChoiceDisabled(false);
          if (matchedCardsCount + 2 === cards.length) {
            setGameWon(true);
          }
          correctMatchAudio.play();
        }, 750);
      } else {
        setTimeout(() => {
          setChooseCardOne(null);
          setChooseCardTwo(null);
          setCardChoiceDisabled(false);
          wrongMatchAudio.play();
        }, 750);
      }
    } else {
      setChooseCardOne(card);
    }
  };

  const restartGame = () => {
    setTurns(0);
    setChooseCardOne(null);
    setChooseCardTwo(null);
    setCardChoiceDisabled(false);
    setCards([]);
    setGameWon(false);
    setGameStarted(false);
    setStartTime(null);
    setTimer(0);
  };

  useEffect(() => {
    if (gameStarted && !gameWon) {
      const interval = setInterval(() => {
        const currentTime = new Date();
        const elapsedSeconds = Math.floor(
          (currentTime - startTime) / 1000
        );
        setTimer(elapsedSeconds);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, gameStarted, gameWon, startTime]);

  useEffect(() => {
    if (gameStarted && gameWon) {
      setTimeout(() => {
        fanfareAudio.play();
      }, 500);
    }
  }, [gameStarted, gameWon]);

  useEffect(() => {
    setActiveDifficulty('normal');
  }, []);




  return (
    <div className="memo-game">
      <div className='memo-game__wrapper'>
        {gameWon ? (
          <>
            <div className='memo-game__victory-screen-wrapper'>
              <div className='memo-game__victory-screen-message'>
                <h4>Congratulations! You won in {formatTime(timer)} and {turns} turns!</h4>
              </div>
              <div className='memo-game__victory-screen-options'>
                <button onClick={startGame}>Play Again</button>
                <button onClick={() => { setGameStarted(false); setGameWon(false) }}>Back to Menu</button>
              </div>
            </div>
          </>
        ) : !gameStarted ? (
          <><div className="difficulty-buttons">
            <div className='difficulty-buttons__wrapper'>
              <MemoDifficultyButtons
                activeDifficulty={activeDifficulty}
                onDifficultyChange={(newDifficulty) => {
                  setDifficulty(newDifficulty);
                  setActiveDifficulty(newDifficulty);
                }} />
            </div>
          </div>
            <div className='difficulty-buttons__start-button'>
              <button onClick={startGame}>Start</button>
            </div>
          </>
        ) : (
          <>
            <div className='memo-game__board-wrapper'>
              <div className='memo-game__board-info'>
                <div className='memo-game__timer-wrapper'>
                  <h4>Time</h4>
                  <div className='memo-game__timer'>{formatTime(timer)}</div>
                </div>
                <div className='memo-game__turns-wrapper'>
                  <h4>Turns played</h4>
                  <div className='memo-game__turns'>{turns}</div>
                </div>
                <div className='memo-game__controls-wrapper'>
                  <h4>Controls</h4>
                  <button onClick={restartGame} className='memo-game__restart-button'>Restart</button>
                </div>
              </div>
            </div>
            <div className='memo-game__card-grid-wrapper'>
              <div className="memo-game__card-grid">
                {cards.map((card) => (
                  <MemoCard
                    key={card.id}
                    card={card}
                    handleCardChoice={handleCardChoice}
                    cardFlipped={
                      card === chooseCardOne || card === chooseCardTwo || card.matched
                    }
                    cardChoiceDisabled={cardChoiceDisabled}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}