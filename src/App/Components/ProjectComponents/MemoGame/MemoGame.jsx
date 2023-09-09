import React, { useEffect, useState } from 'react';
import './MemoGame.css';
import MemoGameCardList from './MemoCardList/MemoCardList';
import { MemoCard } from './MemoCard/MemoCard';
import MemoTimer from './MemoTimer/MemoTimer';

export function MemoGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [chooseCardOne, setChooseCardOne] = useState(null);
  const [chooseCardTwo, setChooseCardTwo] = useState(null);
  const [cardChoiceDisabled, setCardChoiceDisabled] = useState(false);

  useEffect(() => {
    if (chooseCardOne && chooseCardTwo) {
      setCardChoiceDisabled(true);
      if (chooseCardOne.src === chooseCardTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === chooseCardOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        newTurn();
      } else {
        setTimeout(() => newTurn(), 750);
      }
    }
  }, [chooseCardOne, chooseCardTwo]);

  const shuffleCards = (difficulty) => {
    const shuffledCards = [];
    const maxCardCount = {
      normal: 10,
      medium: 16,
      hard: 24,
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
  };

  const handleCardChoice = (card) => {
    if (card.id === chooseCardOne?.id) return;
    chooseCardOne ? setChooseCardTwo(card) : setChooseCardOne(card);
  };

  const newTurn = () => {
    setChooseCardOne(null);
    setChooseCardTwo(null);
    setCardChoiceDisabled(false);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="memo-game">
      <h2>Game</h2>
      <div className="difficulty-buttons">
        <button onClick={() => shuffleCards('normal')} >
          Normal (10 cards)
        </button>
        <button onClick={() => shuffleCards('medium')}>
          Medium (16 cards)
        </button>
        <button onClick={() => shuffleCards('hard')}>Hard (24 cards)</button>
      </div>

      <p>Turns played {turns}</p>
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
  );
}