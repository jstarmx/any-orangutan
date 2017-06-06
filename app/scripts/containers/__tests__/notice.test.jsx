import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ConnectedNotice, { Notice } from '../notice';

const store = configureMockStore()();

describe('ConnectedNotice', () => {
  const connectedComponent = shallow(
    <Provider store={ store }>
      <ConnectedNotice />
    </Provider>
  );

  it('exports a connected component that can be successfully rendered', () =>
    expect(connectedComponent.find(ConnectedNotice)).toBeTruthy()
  );
});

describe('Notice', () => {
  it('renders an empty notice when no error or info is passed in', () => {
    const component = shallow(<Notice error="" info="" />);

    expect(component.find('.notice').node.props.className).toBe('notice');
  });

  it('renders an info notice when info is passed in', () => {
    const component = shallow(<Notice error="" info="exampleInfo" />);

    expect(component.find('.notice').node.props.className)
      .toBe('notice notice--info');
    expect(component.find('.notice').text()).toBe('exampleInfo');
  });

  it('renders an error notice when error is passed in', () => {
    const component = shallow(<Notice error="exampleError" info="" />);

    expect(component.find('.notice').node.props.className)
      .toBe('notice notice--error');
    expect(component.find('.notice').text()).toBe('exampleError');
  });

  it('gives error priority over info', () => {
    const component = shallow(
      <Notice error="exampleError" info="exampleInfo" />
    );

    expect(component.find('.notice').node.props.className)
      .toBe('notice notice--error notice--info');
    expect(component.find('.notice').text()).toBe('exampleError');
  });
});
