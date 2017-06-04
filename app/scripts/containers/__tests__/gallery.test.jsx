import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

import Gallery from '../gallery';

const mockStore = configureMockStore([thunk]);
const store = mockStore({ items: [] });

const wrapper = shallow(
  <Provider store={ store }>
    <Gallery />
  </Provider>
);

it('exports a connected component that can be successfully rendered', () =>
  expect(wrapper.find(Gallery)).toBeTruthy()
);
