import React from 'react';
import { mount } from 'enzyme';

import Gallery from '../gallery';
import Item from '../item';

const addToFavourites = jest.fn();
const removeFromFavourites = jest.fn();
const fetchImages = jest.fn();

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

const component = mount(
  <Gallery
    addToFavourites={ addToFavourites }
    favourites={ ['http://www.flickr.com/photos/goonieman70/34925399121/'] }
    fetchImages={ fetchImages }
    items={ [item1, item2] }
    removeFromFavourites={ removeFromFavourites }
  />
);

it('renders two Item components', () => {
  expect(component.find(Item).length).toBe(2);
});

it('passes the correct props to the Item components', () => {
  expect(component.find(Item).first().props()).toEqual({
    addToFavourites,
    date: item1.date_taken,
    favourite: false,
    path: item1.media.m,
    link: item1.link,
    removeFromFavourites,
    title: item1.title,
  });

  expect(component.find(Item).last().props()).toEqual({
    addToFavourites,
    date: item2.date_taken,
    favourite: true,
    path: item2.media.m,
    link: item2.link,
    removeFromFavourites,
    title: item2.title,
  });
});
