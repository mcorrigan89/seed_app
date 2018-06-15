import 'jest';
import { combinedReducers } from './reducer';
import { ActionTypes } from './actions';

describe('home reducer', () => {

  test('initial state', () => {
    let state;
    state = combinedReducers(undefined, { type: 'NONE', payload: `I've been updated!` });
    expect(state).toEqual({ title: `Home` });
  });

  test('UPDATE_TITLE', () => {
    let state;
    state = combinedReducers({ title: 'Hello World' }, { type: ActionTypes.UPDATE_TITLE, payload: `I've been updated!` });
    expect(state).toEqual({ title: `I've been updated!` });
  });

  test('NONE', () => {
    let state;
    state = combinedReducers({ title: 'Hello World' }, { type: 'NONE', payload: `I've been updated!` });
    expect(state).toEqual({ title: `Hello World` });
  });
});
