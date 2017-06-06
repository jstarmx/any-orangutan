import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { install } from 'offline-plugin/runtime';

import reducers from './reducers';
import ConnectedNotice from './containers/notice';
import Filter from './components/filter';
import ConnectedGallery from './containers/gallery';

// Initialise Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Install service worker for offline functionality
install();

// Set up store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk), persistState())
);

// Render gallery!
render(
  <Provider store={ store }>
    <div>
      <ConnectedNotice />
      <Filter />
      <ConnectedGallery />
    </div>
  </Provider>,
  document.querySelector('.gallery-container')
);

export default store;
