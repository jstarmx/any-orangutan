import React from 'react';
import { shallow } from 'enzyme';

import Item from '../item';

const favouriteImage = jest.fn();

const props = customProps => ({
  date: '2017-06-03T14:44:43-08:00',
  favourite: false,
  favouriteImage,
  link: 'http://www.flickr.com/photos/thevixen/34702706110/',
  path: 'http://farm5.staticflickr.com/4266/34702706110_e722ea7bf8_m.jpg',
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

it('calls the "favouriteImage" function with the link when clicking the button', () => {
  const component = shallow(<Item { ...props() } />);
  component.find('.item__button').simulate('click');

  expect(favouriteImage).toBeCalledWith(props().link);
});
