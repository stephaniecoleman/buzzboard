import React from 'react';

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
    <div onClick={onTileClick(sound)}>
      <h3>{sound.title}</h3>
    </div>
  );
};

export const Board = ({sounds, onTileClick}) => {
  return (
    <div id='board'>
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
