import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { initialState, toggleSound, reducer, Board } from './buzzboard.js';

const store = createStore(reducer, initialState);

const app = document.getElementById('app');

const sounds = [
  {title: 'Waterboundy', file: '../assets/waterbound.mp3'}
];

const render = () => {
  ReactDOM.render(
    <Board
      sounds={sounds}
      onTileClick={(newSound) => store.dispatch(toggleSound(newSound))}
    />,
    app
  );
}

render();
store.subscribe(() => {
  console.log(store.getState());
});
