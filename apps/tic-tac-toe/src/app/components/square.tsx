import React, { useState } from 'react';

export type SquareProps = {
  value: string;
  onClick: () => void;
};

export const Square: React.FC<SquareProps> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
