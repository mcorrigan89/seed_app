import { combineReducers, Reducer } from 'redux';
import { RootActions } from '@store/actions';

import { combinedReducers as homeReducers, HomeState } from '@routes/home/module/reducer';

export interface RootState {
  home: HomeState;
}

export const rootReducer = combineReducers<Reducer<RootState, RootActions>>({
  home: homeReducers
});