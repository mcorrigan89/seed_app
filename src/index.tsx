import { configureStore, history } from '@store/store';
import { ConnectedRouter } from 'connected-react-router';
import { injectGlobal } from 'emotion';
import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router } from 'Router';

export const store = configureStore({ home: { title: 'Derp' }});

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
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);