import './MemoDifficultyButtons.css'

export function MemoDifficultyButtons({ activeDifficulty, onDifficultyChange }) {
  return (
    <div className="difficulty-buttons">
      <div className='difficulty-buttons__ui-wrapper'>
        <div className='difficulty-buttons__button-wrapper'>
          <button
            className={`difficulty-button ${activeDifficulty === 'normal' ? 'active' : ''}`}
            onClick={() => onDifficultyChange('normal')}
          >
            Normal (6 cards)
          </button>
        </div>
        <div className='difficulty-buttons__button-wrapper'>
          <button
            className={`difficulty-button ${activeDifficulty === 'medium' ? 'active' : ''}`}
            onClick={() => onDifficultyChange('medium')}
          >
            Medium (12 cards)
          </button>
        </div>
        <div className='difficulty-button__button-wrapper'>
          <button
            className={`difficulty-button ${activeDifficulty === 'hard' ? 'active' : ''}`}
            onClick={() => onDifficultyChange('hard')}
          >
            Hard (18 cards)
          </button>
        </div>
      </div>
    </div>
  );
}