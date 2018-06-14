import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

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

const App: React.SFC<{}> = () => <div>Hello World!</div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);