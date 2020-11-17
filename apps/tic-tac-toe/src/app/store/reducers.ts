import { combineReducers } from '@reduxjs/toolkit';
import gameReducers from './game';

const reducers = combineReducers({
  game: gameReducers,
});

export default reducers;
