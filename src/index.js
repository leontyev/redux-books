import 'stylesheets/base';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from 'javascripts/components/app';
import rootReducer from './javascripts/reducers';

let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('main'));

