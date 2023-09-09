import cardback from '../../../../Images/memo-icons/Cardback.png';
import './MemoCard.css';

export function MemoCard({ card, handleCardChoice, cardFlipped, cardChoiceDisabled }) {
  const handleClick = () => {
    if (!cardChoiceDisabled) {
      handleCardChoice(card)

    }

  }
  return (
    <div className="memo-card">
      <div className={cardFlipped ? "flipped" : ''}>
        <img className="memo-card__front" src={card.src} alt="card front" />
        <img
          onClick={handleClick}
          className="memo-card__back"
          src={cardback}
          alt="cardback"
        />
      </div>
    </div>
  );
}
