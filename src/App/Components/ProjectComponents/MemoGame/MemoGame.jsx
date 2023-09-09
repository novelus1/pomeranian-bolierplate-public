import React, { useEffect, useState } from 'react';
import './MemoGame.css';
import MemoGameCardList from './MemoCardList/MemoCardList'


import { MemoCard } from './MemoCard/MemoCard';

export function MemoGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [chooseCardOne, setChooseCardOne] = useState(null);
  const [chooseCardTwo, setChooseCardTwo] = useState(null);
  const [cardChoiceDisabled, setCardChoiceDisabled] = useState(false);

  useEffect(() => {
    if (chooseCardOne && chooseCardTwo) {
      setCardChoiceDisabled(true)
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

  const shuffleCards = () => {
    const shuffledCards = [...MemoGameCardList, ...MemoGameCardList]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleCardChoice = (card) => {
    if (card.id === chooseCardOne?.id) return
    chooseCardOne ? setChooseCardTwo(card) : setChooseCardOne(card);
  };

  const newTurn = () => {
    setChooseCardOne(null);
    setChooseCardTwo(null);
    setCardChoiceDisabled(false)
    setTurns((prevTurns) => ++prevTurns);
  };

  return (
    <div className="memo-game">
      <h2>game</h2>
      <button onClick={shuffleCards}>start</button>
      <p>{turns}</p>
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