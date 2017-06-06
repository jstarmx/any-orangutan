import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { Gallery } from '../gallery';

const store = configureMockStore([thunk])();
const props = {
  activeFilter: 'all',
  favourites: [],
  fetchImages: () => {},
  items: [
    {
      date_taken: '2017-06-03T14:44:43-08:00',
      link: 'http://www.flickr.com/photos/thevixen/34702706110/',
      media: {
        m: 'http://farm5.staticflickr.com/4266/34702706110_e722ea7bf8_m.jpg',
      },
      title: 'Make Them Go Away',
    },
    {
      date_taken: '2017-05-28T11:41:42-08:00',
      link: 'http://www.flickr.com/photos/goonieman70/34925399121/',
      media: {
        m: 'http://farm5.staticflickr.com/4271/34925399121_1a817f3f1c_m.jpg',
      },
      title: 'Monkeying around.',
    },
  ],
};

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={ store }>
      <Gallery { ...props } />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
