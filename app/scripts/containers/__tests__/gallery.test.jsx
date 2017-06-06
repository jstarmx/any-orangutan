import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';

import ConnectedGallery, { Gallery } from '../gallery';
import ConnectedItem from '../item';

const store = configureMockStore([thunk])();

describe('ConnectedGallery', () => {
  const connectedComponent = shallow(
    <Provider store={ store }>
      <ConnectedGallery />
    </Provider>
  );

  it('exports a connected component that can be successfully rendered', () =>
    expect(connectedComponent.find(ConnectedGallery)).toBeTruthy()
  );
});

describe('Gallery', () => {
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

  const props = customProps => ({
    activeFilter: 'all',
    favourites: ['http://www.flickr.com/photos/goonieman70/34925399121/'],
    fetchImages,
    items: [item1, item2],
    ...customProps,
  });

  describe('when the active filter is "all"', () => {
    const component = mount(
      <Provider store={ store }>
        <Gallery { ...props() } />
      </Provider>
    );

    it('renders two Item components', () => {
      expect(component.find(ConnectedItem).length).toBe(2);
    });

    it('passes the correct props to the Item components', () => {
      expect(component.find(ConnectedItem).first().props()).toEqual({
        date: item1.date_taken,
        favourite: false,
        path: item1.media.m,
        link: item1.link,
        title: item1.title,
      });

      expect(component.find(ConnectedItem).last().props()).toEqual({
        date: item2.date_taken,
        favourite: true,
        path: item2.media.m,
        link: item2.link,
        title: item2.title,
      });
    });
  });

  describe('when the active filter is "favourites"', () => {
    const component = mount(
      <Provider store={ store }>
        <Gallery { ...props({ activeFilter: 'favourites' }) } />
      </Provider>
    );

    it('renders only the items that have been favourited', () => {
      expect(component.find(ConnectedItem).length).toBe(1);

      expect(component.find(ConnectedItem).first().props()).toMatchObject({
        favourite: true,
      });
    });
  });
});
