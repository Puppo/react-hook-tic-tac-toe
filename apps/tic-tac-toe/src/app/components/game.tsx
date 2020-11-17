import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrent,
  getHistory,
  getWinner,
  getXIsNext,
  historyJump,
  move,
} from '../store/game';
import { Board } from './board';

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const history = useSelector(getHistory);
  const current = useSelector(getCurrent);
  const winner = useSelector(getWinner);
  const xIsNext = useSelector(getXIsNext);

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const handleClick = (index: number): void => {
    if (!winner) {
      dispatch(move({ index }));
    }
  };

  const jumpTo = (step: number): void => {
    dispatch(historyJump({ step }));
  };

  let status: string;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current} onClick={(index) => handleClick(index)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
