import React, { useState } from 'react';
import { Square } from './square';

export type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
};

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
