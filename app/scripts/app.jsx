import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { install } from 'offline-plugin/runtime';

import reducer from './reducers/gallery';
import Gallery from './containers/gallery';

// Initialise Redux devtools
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

// Install service worker for offline functionality
install();

// Render gallery
const store = createStore(reducer, devtools, applyMiddleware(thunk));

render(
  <Provider store={ store }>
    <Gallery />
  </Provider>,
  document.querySelector('.gallery-container')
);
