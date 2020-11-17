import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

export type MoveActionPayload = {
  index: number;
};

export type HistoryJumpActionPayload = {
  step: number;
};

const calculateWinner = (squares: string[]): string => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const slice = createSlice({
  name: 'game',
  initialState: {
    history: [{ squares: Array<string>(9).fill('') }],
    xIsNext: true,
  },
  reducers: {
    move: (state, action: PayloadAction<MoveActionPayload>) => {
      const { squares } = state.history[state.history.length - 1];
      if (calculateWinner(squares) || squares[action.payload.index]) {
        return;
      }
      state.history.push({
        squares: {
          ...state.history[state.history.length - 1].squares,
          [action.payload.index]: state.xIsNext ? 'X' : 'O',
        },
      });
      state.xIsNext = !state.xIsNext;
    },
    historyJump: (state, action: PayloadAction<HistoryJumpActionPayload>) => {
      const { step } = action.payload;
      state.history.splice(step + 1, state.history.length - step);
      state.xIsNext = step % 2 === 0;
    },
  },
});

export const { historyJump, move } = slice.actions;
export default slice.reducer;

export const getGame = (state) => state.game;

export const getHistory = createSelector(getGame, (state) => state.history);

export const getStepNumber = createSelector(
  getGame,
  (state) => state.stepNumber
);
export const getCurrent = createSelector(
  getHistory,
  (history) => history[history.length - 1].squares
);

export const getXIsNext = createSelector(getGame, (state) => state.xIsNext);

export const getWinner = createSelector(getCurrent, calculateWinner);
