import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { initialState, toggleSound, reducer, Board } from './buzzboard.js';
import 'purecss/build/pure-min.css';

const store = createStore(reducer, initialState);

const app = document.getElementById('app');

const sounds = [
  {title: 'Waterbound', file: '../assets/waterbound.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound1.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound2.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound3.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound4.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound5.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound6.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound7.mp3'},
  {title: 'Waterbound', file: '../assets/waterbound8.mp3'}
];

const render = () => {
  ReactDOM.render(
    <Board
      sounds={sounds}
      onTileClick={(newSound) => () =>store.dispatch(toggleSound(newSound))}
    />,
    app
  );
};

render();
store.subscribe(() => {
  console.log(store.getState());
});
