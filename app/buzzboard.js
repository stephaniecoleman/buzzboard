import React from 'react';

// MODEL

export const initialState = {
  isPlaying: false,
  currentSound: null
};

// UPDATE

export const toggleSound = (newSound) => {
  { type: 'TOGGLE', newSound }
}

export const reducer = (state, action) => {
  switch (action.type) {
  case 'TOGGLE':
    const isPlaying = !state.isPlaying || state.currentSound !== action.newSound
    return {...state, isPlaying: isPlaying, currentSound: action.newSound}
  default:
    return state;
  }
}

// VIEW

const Tile = (({title, sound, onTileClick}) =>
  <div onClick={onTileClick(sound)}>
    <h3>{title}</h3>
  </div>
) 

export const Board = ({sounds, onTileClick}) =>
  <div id='board'>
    {sounds.map((sound, index) => {
      return <Tile
        key={index}
        title={sound.title}
        sound={sound.file}
        onTileClick={onTileClick}
      />
    })}
  </div>

// WHERE DOES THIS STUFF GO?

const player = document.getElementById('player');

const playSound = (sound) => () => {
  player.setAttribute('src', sound);
  player.play();
}
