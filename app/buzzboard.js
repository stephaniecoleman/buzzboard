import React from 'react';
import styles from './buzzboard.css';

// MODEL

export const initialState = {
  isPlaying: false,
  currentSound: null
};

// UPDATE

export const toggleSound = (newSound) => (
  { type: 'TOGGLE', newSound }
);

export const reducer = (state, action) => {
  switch (action.type) {
  case 'TOGGLE':
    const isPlaying = !state.isPlaying || state.currentSound !== action.newSound
    return {...state, isPlaying: isPlaying, currentSound: action.newSound}
  default:
    return state;
  }
};

// VIEW

const Tile = ({sound, onTileClick}) => {
  return (
    <div className='pure-u-1-3'>
      <button onClick={onTileClick(sound)} className={styles.boardTile}>
        {sound.title}
      </button>
    </div>
  );
};

export const Board = ({sounds, onTileClick}) => {
  return (
    <div id='board' className={styles.board}>
      {sounds.map((sound) => {
        return <Tile
          key={sound.file}
          sound={sound}
          onTileClick={onTileClick}
        />
      })}
    </div>
  );
};

// WHERE DOES THIS STUFF GO?

const player = document.getElementById('player');

const playSound = (sound) => () => {
  player.setAttribute('src', sound);
  player.play();
};
