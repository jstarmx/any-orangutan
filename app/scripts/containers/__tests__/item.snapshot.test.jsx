import React from 'react';
import renderer from 'react-test-renderer';

import { Item } from '../item';

const props = {
  addToFavourites: () => {},
  date: '2017-06-03T14:44:43-08:00',
  favourite: false,
  link: 'http://www.flickr.com/photos/thevixen/34702706110/',
  path: 'http://farm5.staticflickr.com/4266/34702706110_e722ea7bf8_m.jpg',
  removeFromFavourites: () => {},
  title: 'Make Them Go Away',
};

it('renders correctly', () => {
  const tree = renderer.create(
    <Item { ...props } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
