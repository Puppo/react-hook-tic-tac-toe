import React from 'react';
import { Provider } from 'react-redux';
import { Game } from './components/game';
import configureStore from './store/configureStore';

import './app.scss';

const store = configureStore();

export function App() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
