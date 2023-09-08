import React, { useEffect } from 'react';
import Confetti from 'canvas-confetti';

const MoleGameSettings = ({
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
  useEffect(() => {
    if (scoreCount > 0 && winTime !== null && !gameStarted) {
      Confetti({
        particleCount: 100,
        spread: 70,
      });
    }
  }, [scoreCount, winTime, gameStarted]);

  if (!gameStarted) {
    return (
      <div style={{ marginTop: "5em" }}>
        <div className="mole-game__settings-wrapper">
          {scoreCount !== null && winTime !== null ? (
            <h2>
              <p className="mole-game__result">
                {scoreCount > 0 ? (
                  <>
                    <p>
                      Congratulations! You have caught {scoreCount} moles in{' '}
                      {winTime >= 60
                        ? `${Math.floor(winTime / 60)} ${winTime >= 120 ? 'minutes' : 'minute'
                        } ${winTime % 60 !== 0
                          ? `${winTime % 60} seconds`
                          : ''
                        }`
                        : winTime > 1
                          ? `${winTime} seconds`
                          : `${winTime} second`}
                      !
                    </p>
                  </>
                ) : (
                  'Try again!'
                )}
              </p>
            </h2>
          ) : null}
        </div>
        <div className="mole-game__options">
          <div className="mole-game__options-ui">
            <div className="mole-game__time-section">
              <h4>Game Time</h4>
              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => {
                    setGameTime(timeValue);
                  }}
                  key={timeValue}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mole-game__count-section">
              <h4>Mole Count</h4>
              {moleCountOption.map(({ label }) => (
                <button
                  className={
                    moleCount === Number(label[0]) ? 'activeButton' : ''
                  }
                  onClick={() => setMoleCount(Number(label[0]))}
                  key={label}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="mole-game__control-section">
              <h4>Controls</h4>
              <button onClick={startGame}>Start</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MoleGameSettings;
