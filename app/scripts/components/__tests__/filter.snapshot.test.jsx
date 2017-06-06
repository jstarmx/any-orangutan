import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Filter from '../filter';

const store = configureMockStore()({ filter: { activeFilter: 'all' } });

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={ store }>
      <Filter activeFilter="all" filter={ () => {} } />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
