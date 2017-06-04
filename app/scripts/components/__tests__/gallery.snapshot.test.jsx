import React from 'react';
import renderer from 'react-test-renderer';

import Gallery from '../gallery';

const item1 = {
  date_taken: '2017-06-03T14:44:43-08:00',
  link: 'http://www.flickr.com/photos/thevixen/34702706110/',
  media: {
    m: 'http://farm5.staticflickr.com/4266/34702706110_e722ea7bf8_m.jpg',
  },
  title: 'Make Them Go Away',
};
const item2 = {
  date_taken: '2017-05-28T11:41:42-08:00',
  link: 'http://www.flickr.com/photos/goonieman70/34925399121/',
  media: {
    m: 'http://farm5.staticflickr.com/4271/34925399121_1a817f3f1c_m.jpg',
  },
  title: 'Monkeying around.',
};

it('renders correctly', () => {
  const tree = renderer.create(
    <Gallery fetchImages={ () => {} } items={ [item1, item2] } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
