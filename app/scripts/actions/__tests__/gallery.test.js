import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../gallery';
import fetch from '../../helpers/fetch';

jest.mock('../../helpers/fetch');

const mockStore = configureMockStore([thunk]);

afterEach(() => jest.resetModules());

it('exports an ADD_TO_FAVOURITES constant', () =>
  expect(actions.ADD_TO_FAVOURITES).toBe('ADD_TO_FAVOURITES')
);

it('exports an REMOVE_FROM_FAVOURITES constant', () =>
  expect(actions.REMOVE_FROM_FAVOURITES).toBe('REMOVE_FROM_FAVOURITES')
);

it('exports an FETCHING_IMAGES constant', () =>
  expect(actions.FETCHING_IMAGES).toBe('FETCHING_IMAGES')
);

it('exports an IMAGES_RECEIVED constant', () =>
  expect(actions.IMAGES_RECEIVED).toBe('IMAGES_RECEIVED')
);

it('exports an ERROR constant', () =>
  expect(actions.ERROR).toBe('ERROR')
);

it('exports an addToFavourites action', () => {
  const data = 'image1';
  const expectedAction = {
    data,
    type: actions.ADD_TO_FAVOURITES,
  };

  expect(actions.addToFavourites(data)).toEqual(expectedAction);
});

it('exports a removeFromFavourites action', () => {
  const data = 'image1';
  const expectedAction = {
    data,
    type: actions.REMOVE_FROM_FAVOURITES,
  };

  expect(actions.removeFromFavourites(data)).toEqual(expectedAction);
});

it('exports an updateImages action', () => {
  const data = [];
  const expectedAction = {
    data,
    type: actions.IMAGES_RECEIVED,
  };

  expect(actions.updateImages(data)).toEqual(expectedAction);
});

it('exports a fetchImages action, which calls updateImages with data', () => {
  fetch.mockImplementation(() =>
    Promise.resolve({ items: ['image1', 'image2'] })
  );

  const store = mockStore({ items: [] });
  const expectedActions = [
    {
      type: actions.FETCHING_IMAGES,
    },
    {
      data: ['image1', 'image2'],
      type: actions.IMAGES_RECEIVED,
    },
  ];

  return store.dispatch(actions.fetchImages()).then(() =>
    expect(store.getActions()).toEqual(expectedActions)
  );
});

it('dispatches an ERROR action when the fetch fails', () => {
  fetch.mockImplementation(() =>
    Promise.reject('exampleError')
  );

  const store = mockStore({ items: [] });
  const expectedActions = [
    {
      type: actions.FETCHING_IMAGES,
    },
    {
      type: actions.ERROR,
    },
  ];

  store.dispatch(actions.fetchImages()).then(() =>
    expect(store.getActions()).toEqual(expectedActions)
  );
});
