import React from 'react';
import Mole from '../../../Images/mole-game/mole.png';
import formatTime from './Time';

export const MoleGameBoard = ({
  scoreCount,
  moleArray,
  hitTheMole,
  gameStarted,
  timer,
  restartGame,
}) => {
  if (gameStarted) {
    return (
      <div className="mole-game__board-wrapper">
        <div className="mole-game__board-info">
          <div>
            <h4>Time Left</h4>
            <div className="mole-game__timer">{formatTime(timer)}</div>
          </div>
          <div>
            <h4>Score</h4>
            <div className="mole-game__score">{`${scoreCount}`}</div>
          </div>
          <div>
            <h4>Controls</h4>
            <button onClick={restartGame} className="mole-game__restart-button">
              Restart
            </button>
          </div>
        </div>
        <div className="mole-game__board-ui">
          {moleArray.map((mole, index) => (
            <div className="mole-game__board-ui-square" key={index}>
              <span>
                {mole.isVisible ? (
                  <img
                    src={Mole}
                    alt="Mole!"
                    onClick={() => hitTheMole(index)}
                  />
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MoleGameBoard;
