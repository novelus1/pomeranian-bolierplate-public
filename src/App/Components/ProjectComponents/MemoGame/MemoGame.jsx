import { useEffect, useState } from 'react';
import './MemoGame.css';

import bulbasaur from '../../../Images/memo-icons/Bulbasaur.png';
import charmander from '../../../Images/memo-icons/Charmander.png';
import mewtwo from '../../../Images/memo-icons/Mewtwo.png';
import pikachu from '../../../Images/memo-icons/Pikachu.png';
import squirtle from '../../../Images/memo-icons/Squirtle.png';
import { MemoCard } from './MemoCard/MemoCard';

const gameCards = [
  { src: bulbasaur, matched: false },
  { src: charmander, matched: false },
  { src: mewtwo, matched: false },
  { src: pikachu, matched: false },
  { src: squirtle, matched: false },
];

export function MemoGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [chooseCardOne, setChooseCardOne] = useState(null);
  const [chooseCardTwo, setChooseCardTwo] = useState(null);

  useEffect(() => {
    if (chooseCardOne && chooseCardTwo) {
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
        newTurn();
      }
    }
  }, [chooseCardOne, chooseCardTwo]);

  const shuffleCards = () => {
    const shuffledCards = [...gameCards, ...gameCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleCardChoice = (card) => {
    chooseCardOne ? setChooseCardTwo(card) : setChooseCardOne(card);
  };

  const newTurn = () => {
    setChooseCardOne(null);
    setChooseCardTwo(null);
    setTurns((prevTurns) => ++prevTurns);
  };

  return (
    <div className="memo-game">
      <h2>game</h2>
      <button onClick={shuffleCards}>start</button>

      <div className="memo-game__card-grid">
        {cards.map((card) => (
          <MemoCard
            key={card.id}
            card={card}
            cardFlipped={
              card === chooseCardOne || card === chooseCardTwo || card.matched
            }
            handleCardChoice={handleCardChoice}
          />
        ))}
      </div>
    </div>
  );
}
