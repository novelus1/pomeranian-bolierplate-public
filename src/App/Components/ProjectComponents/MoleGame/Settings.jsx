import './styles.css'

export const MoleGameSettings = ({
  gameTime,
  setGameTime,
  winTime,
  moleCount,
  setMoleCount,
  scoreCount,
  gameStarted,
  startGame,
}) => {
  const gameTimeOption = [
    { label: '1 minute', timeValue: 1 * 60 },
    { label: '2 minutes', timeValue: 2 * 60 },
    { label: '3 minutes', timeValue: 3 * 60 },
  ];

  const moleCountOption = [
    { label: '1 mole' },
    { label: '2 moles' },
    { label: '3 moles' },
  ];

  if (!gameStarted) {
    return (
      <div className="mole-game__wrapper">
        {/* <p className="mole-game__instructions">
          A game involving hitting a mole on the square where it appears.
        </p> */}
        <div>
          {scoreCount > 0 && winTime && (
            <h2>
              <p className="mole-game__finish">
                Gratulacje! Twój wynik to {scoreCount} złapane krety w{' '}
                {winTime >= 60
                  ? `${Math.floor(winTime / 60)} ${winTime >= 120 ? 'minuty' : 'minutę'
                  }`
                  : winTime < 5
                    ? `${winTime} sekundy`
                    : `${winTime} sekund`}
                !
              </p>
            </h2>
          )}
        </div>

        <div className="mole-game__option-wrapper">
          <div className="mole-game__buttons">
            <div>
              <h4>Game Time</h4>
              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => {
                    setGameTime(timeValue);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <div>
              <h4>Mole Count</h4>
              {moleCountOption.map(({ label }) => (
                <button
                  className={
                    moleCount === Number(label[0]) ? 'activeButton' : ''
                  }
                  onClick={() => setMoleCount(Number(label[0]))}
                >
                  {label}
                </button>
              ))}
            </div>
            <div>
              <h4>Controls</h4>
              <button onClick={startGame}>Start</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MoleGameSettings;
