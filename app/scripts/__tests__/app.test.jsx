import { install } from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';
import * as redux from 'redux';
import { Provider } from 'react-redux';

import Gallery from '../containers/gallery';
import reducer from '../reducers/gallery';

jest.mock('offline-plugin/runtime');
jest.mock('react-dom');
jest.mock('redux');
jest.mock('redux-thunk', () => 'thunk');
jest.mock('redux-localstorage', () => () => 'persistState');

document.body.innerHTML = '<div class="gallery-container"></div>';
window.__REDUX_DEVTOOLS_EXTENSION__ = () => 'devtools';
redux.applyMiddleware = middleware => middleware;
redux.compose = jest.fn(() => 'compose');
const createStore = jest.spyOn(redux, 'createStore');
const store = redux.createStore();

require('../app');

it('calls the offline-plugin install script', () => {
  expect(install).toBeCalled();
});

it('creates a store', () => {
  expect(redux.compose).toBeCalledWith('thunk', 'persistState');
  expect(createStore).toBeCalledWith(reducer, 'devtools', 'compose');
});

it('renders the Gallery container', () => {
  expect(render).toBeCalledWith(
    <Provider store={ store }>
      <Gallery />
    </Provider>,
    document.querySelector('.gallery-container')
  );
});
