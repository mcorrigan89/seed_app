import { RootActions } from '@store/actions';
import { Reducer } from 'redux';
// import reduceReducers from 'reduce-reducers';

import { ActionTypes } from './actions';

export interface HomeState {
  title: string; 
}

const initialState: HomeState = { title: 'Home' };

export const reducer: Reducer<HomeState, RootActions> = (state = initialState, action): HomeState => {
  switch (action.type) {
    case ActionTypes.UPDATE_TITLE:
      return { ...state, title: action.payload };
    case ActionTypes.CLEAR_TITLE:
      return { ...state, title: '' };
    default:
      return state;
  }
};

export const combinedReducers = reducer;
// export const combinedReducers = reduceReducers<HomeState>(reducer);