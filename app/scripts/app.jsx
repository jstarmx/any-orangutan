import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { install } from 'offline-plugin/runtime';
import persistState from 'redux-localstorage';

import reducer from './reducers/gallery';
import Gallery from './containers/gallery';

// Initialise Redux devtools
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

// Install service worker for offline functionality
install();

// Set up store
const store = createStore(
  reducer,
  devtools,
  compose(applyMiddleware(thunk), persistState())
);

// Render gallery!
render(
  <Provider store={ store }>
    <Gallery />
  </Provider>,
  document.querySelector('.gallery-container')
);
