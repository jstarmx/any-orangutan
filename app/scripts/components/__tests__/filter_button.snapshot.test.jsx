import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../filter_button';

const props = {
  active: false,
  label: 'All',
  onClick: () => {},
};

it('renders correctly', () => {
  const tree = renderer.create(
    <Button { ...props } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
