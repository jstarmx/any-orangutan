import React from 'react';
import renderer from 'react-test-renderer';

import { Filter } from '../filter';

it('renders correctly', () => {
  const tree = renderer.create(
    <Filter activeFilter="all" filter={ () => {} } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
