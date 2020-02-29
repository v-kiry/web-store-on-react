import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { HashRouter } from 'react-router-dom';
import StoreContext from 'storeon/react/context';

import store from './store';
import App from './App.js';


ReactDOM.render(
  <StoreContext.Provider value={store}>
    <HashRouter basename='/'>
      <App/>
    </HashRouter>
  </StoreContext.Provider>,
  document.getElementById('root')
);