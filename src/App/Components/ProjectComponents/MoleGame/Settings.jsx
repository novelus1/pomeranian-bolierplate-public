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
      <div className="moleGameOptions">
        {/* <p className="instructions">
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p> */}
        <div>
          {scoreCount > 0 && winTime && (
            <h2>
              <p className="victory">
                Gratulacje! Twój wynik to {scoreCount} złapane krety w{' '}
                {winTime >= 60
                  ? `${Math.floor(winTime / 60)} ${winTime >= 120 ? 'minuty' : 'minutę'
                  }`
                  : winTime > 1
                    ? `${winTime} seceonds`
                    : `${winTime} second`}
                !
              </p>
            </h2>
          )}
        </div>

        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4 className="game-text">Game Time</h4>
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
              <h4 className="game-text">Mole Count</h4>
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
              <h4 className="game-text">Controls</h4>
              <button onClick={startGame}>Start</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MoleGameSettings;
