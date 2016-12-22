import renderer from 'react-test-renderer';
import React from 'react';
import { toggleSound, initialState } from './buzzboard.js'

describe('toggleSound', () => {
  const action = { 'newSound': 'myCoolNewSound', 'type': 'TOGGLE' }
  it('returns an action', () => {
    expect(toggleSound('myCoolNewSound')).toEqual(action);
  })
})

// MODEL

describe('initialState', () => {
  it('matches snapshot', () => {
    expect(initialState).toMatchSnapshot();
  });
});
