import React from 'react';
import Mole from '../../../Images/Mole.svg';
import formatTime from './Time';
import './styles.css'

export const MoleGameBoard = ({
  scoreCount,
  moleArray,
  gameStarted,
  hitTheMole,
  timer,
  restartGame,
}) => {
  if (gameStarted) {
    return (
      <div className='mole-game__board-wrapper'>
        <div >
          <div >
            <h4>Time Left</h4>
            <div className="mole-game__time">{formatTime(timer)}</div>
          </div>
          <div>
            <h4>Score </h4>
            <div className='mole-game__score'>{`${scoreCount}`}</div>
          </div>
          <div>
            <h4>Controls</h4>
            <button onClick={restartGame} className="mole-game__restart-button">
              Restart
            </button>
          </div>
        </div>
        <div className="mole-game__board">
          {moleArray.map((mole, index) => (
            <div className="mole-game__field" key={index}>
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
}


export default MoleGameBoard;
