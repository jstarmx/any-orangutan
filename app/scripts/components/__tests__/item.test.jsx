import React from 'react';
import { shallow } from 'enzyme';

import Item from '../item';

const addToFavourites = jest.fn();
const removeFromFavourites = jest.fn();

const props = customProps => ({
  addToFavourites,
  date: '2017-06-03T14:44:43-08:00',
  favourite: false,
  link: 'http://www.flickr.com/photos/thevixen/34702706110/',
  path: 'http://farm5.staticflickr.com/4266/34702706110_e722ea7bf8_m.jpg',
  removeFromFavourites,
  title: 'Make Them Go Away',
  ...customProps,
});

it('renders an unfavourited item', () => {
  const component = shallow(<Item { ...props() } />);

  expect(component.find('.item__button').node.props.className)
    .toBe('item__button ');
  expect(component.find('.item__button').text())
    .toBe('Favourite');
  expect(component.find('.item__icon').node.props.src)
    .toBe('heart_empty.svg');
  expect(component.find('.item__icon').node.props.alt)
    .toBe('Add to favourites');
});

it('renders an favourited item', () => {
  const component = shallow(<Item { ...props({ favourite: true }) } />);

  expect(component.find('.item__button').node.props.className)
    .toBe('item__button item__button--favourite');
  expect(component.find('.item__button').text())
    .toBe('Favourited!');
  expect(component.find('.item__icon').node.props.src)
    .toBe('heart_full.svg');
  expect(component.find('.item__icon').node.props.alt)
    .toBe('Remove from favourites');
});

it('calls the "addToFavourites" function when not favourited', () => {
  const component = shallow(<Item { ...props() } />);
  component.find('.item__button').simulate('click');

  expect(addToFavourites).toBeCalledWith(props().link);
});

it('calls the "removeFromFavourites" function when already favourited', () => {
  const component = shallow(<Item { ...props({ favourite: true }) } />);
  component.find('.item__button').simulate('click');

  expect(removeFromFavourites).toBeCalledWith(props().link);
});
