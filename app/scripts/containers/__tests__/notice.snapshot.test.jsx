import React from 'react';
import renderer from 'react-test-renderer';

import { Notice } from '../notice';

it('renders correctly', () => {
  const tree = renderer.create(
    <Notice error="" info="" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
