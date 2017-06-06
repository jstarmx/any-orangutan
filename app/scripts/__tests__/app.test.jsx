import { install } from 'offline-plugin/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ConnectedNotice from '../containers/notice';
import Filter from '../components/filter';
import ConnectedGallery from '../containers/gallery';

require('mock-local-storage');

jest.mock('offline-plugin/runtime');
jest.mock('react-dom');

document.body.innerHTML = '<div class="gallery-container"></div>';

const store = require('../app').default;

it('calls the offline-plugin install script', () =>
  expect(install).toBeCalled()
);

it('renders the Gallery container', () =>
  expect(render).toBeCalledWith(
    <Provider store={ store }>
      <div>
        <ConnectedNotice />
        <Filter />
        <ConnectedGallery />
      </div>
    </Provider>,
    document.querySelector('.gallery-container')
  )
);
