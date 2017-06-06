import React from 'react';
import { shallow } from 'enzyme';

import Button from '../filter_button';

const onClick = jest.fn();
const props = customProps => ({
  active: false,
  label: 'All',
  onClick,
  ...customProps,
});

it('renders a regular button', () => {
  const component = shallow(<Button { ...props() } />);

  expect(component.find('.filter__button').node.props.className)
    .toBe('filter__button');
});

it('renders an active button', () => {
  const component = shallow(<Button { ...props({ active: true }) } />);

  expect(component.find('.filter__button').node.props.className)
    .toBe('filter__button filter__button--active');
});

it('renders a highlighted button', () => {
  const component = shallow(<Button { ...props({ highlight: true }) } />);

  expect(component.find('.filter__button').node.props.className)
    .toBe('filter__button filter__button--highlight');
});

it('calls the onClick function when clicked', () => {
  const component = shallow(<Button { ...props() } />);
  component.find('.filter__button').simulate('click');

  expect(onClick).toBeCalled();
});
