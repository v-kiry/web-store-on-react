import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from 'storeon/react/context';

import store from './store';
import App from './App.js';


ReactDOM.render(
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StoreContext.Provider>,
  document.getElementById('root')
);