import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { injectGlobal } from 'emotion';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from '@store/store';
import { Router } from 'Router';

export const history = createBrowserHistory();
export const store = configureStore(history);

injectGlobal({
  'html, body': {
    margin: 0,
    boxSizing: 'border-box',
    height: '100%',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  '#root': {
    minHeight: '100%'
  }
});

const App: React.SFC<{}> = hot(module)(() => (
  <Provider store={store({ home: { title: 'Derp '}})}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);