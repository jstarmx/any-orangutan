import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Filter from '../filter';
import ConnectedButton from '../../containers/button';

const store = configureMockStore()({ filter: { activeFilter: 'all' } });

const component = mount(
  <Provider store={ store }>
    <Filter />
  </Provider>
);

it('renders two Button components', () => {
  expect(component.find(ConnectedButton).length).toBe(2);
});

it('passes the correct props to the Button components', () => {
  expect(component.find(ConnectedButton).first().props()).toEqual({
    label: 'all',
  });

  expect(component.find(ConnectedButton).last().props()).toEqual({
    highlight: true,
    label: 'favourites',
  });
});
