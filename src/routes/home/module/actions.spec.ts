import 'jest';
import { combinedReducers } from './reducer';
import { Actions, ActionTypes } from './actions';

describe('home actions', () => {
  test('updateTitle', () => {
    expect(Actions.updateTitle('fizz buzz')).toEqual({ type: ActionTypes.UPDATE_TITLE, payload: 'fizz buzz' });
  });
});
