import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
require('./styles/styles.css');

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
