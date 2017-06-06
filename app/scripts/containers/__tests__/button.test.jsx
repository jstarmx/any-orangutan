import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedButton, { Button } from '../button';

const store = configureMockStore()();

describe('ConnectedButton', () => {
  const connectedComponent = shallow(
    <Provider store={ store }>
      <ConnectedButton />
    </Provider>
  );

  it('exports a connected component that can be successfully rendered', () =>
    expect(connectedComponent.find(ConnectedButton)).toBeTruthy()
  );
});

describe('Button', () => {
  const filter = jest.fn();
  const props = customProps => ({
    activeFilter: 'favouries',
    label: 'all',
    filter,
    ...customProps,
  });

  it('renders a regular button', () => {
    const component = shallow(<Button { ...props() } />);

    expect(component.find('.filter__button').node.props.className)
      .toBe('filter__button');
  });

  it('renders an active button', () => {
    const component = shallow(<Button { ...props({ activeFilter: 'all' }) } />);

    expect(component.find('.filter__button').node.props.className)
      .toBe('filter__button filter__button--active');
  });

  it('renders a highlighted button', () => {
    const component = shallow(<Button { ...props({ highlight: true }) } />);

    expect(component.find('.filter__button').node.props.className)
      .toBe('filter__button filter__button--highlight');
  });

  it('calls the filter function when clicked', () => {
    const component = shallow(<Button { ...props() } />);
    component.find('.filter__button').simulate('click');

    expect(filter).toBeCalledWith(props().label);
  });
});
