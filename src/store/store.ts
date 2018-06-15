import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
// import { logger } from 'redux-logger';

import { rootReducer, RootState } from '@store/rootReducer';

// const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export const configureStore = (initialState: Partial<RootState> = {}) => {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(...[], routerMiddleware(history)))
  );
};