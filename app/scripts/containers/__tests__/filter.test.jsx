import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';

import ConnectedFilter, { Filter } from '../filter';
import Button from '../../components/filter_button';

const store = configureMockStore([thunk])();

describe('ConnectedFilter', () => {
  const connectedComponent = shallow(
    <Provider store={ store }>
      <ConnectedFilter />
    </Provider>
  );

  it('exports a connected component that can be successfully rendered', () =>
    expect(connectedComponent.find(ConnectedFilter)).toBeTruthy()
  );
});

describe('Filter', () => {
  const filter = jest.fn();
  const component = shallow(<Filter activeFilter="all" filter={ filter } />);

  it('renders two Button components', () => {
    expect(component.find(Button).length).toBe(2);
  });

  it('passes the correct props to the Button components', () => {
    expect(component.find(Button).first().props()).toEqual({
      active: true,
      highlight: false,
      label: 'all',
      onClick: expect.any(Function),
    });

    expect(component.find(Button).last().props()).toEqual({
      active: false,
      highlight: true,
      label: 'favourites',
      onClick: expect.any(Function),
    });
  });
});
