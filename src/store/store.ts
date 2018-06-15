import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { History } from 'history';

import { rootReducer, RootState } from '@store/rootReducer';

const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (history: History) => (initialState: Partial<RootState>) => {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
  );
};