import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../gallery';

jest.mock('../../helpers/fetch', () => () =>
  Promise.resolve({ items: ['image1', 'image2'] }));

const mockStore = configureMockStore([thunk]);

it('exports an IMAGES_RECEIVED constant', () =>
  expect(actions.IMAGES_RECEIVED).toBe('IMAGES_RECEIVED')
);

it('exports an updateImages action', () => {
  const data = [];
  const expectedAction = {
    data,
    type: actions.IMAGES_RECEIVED,
  };

  expect(actions.updateImages(data)).toEqual(expectedAction);
});

it('exports a fetchImages action, which calls updateImages with data', () => {
  const store = mockStore({ items: [] });
  const expectedActions = [{
    data: ['image1', 'image2'],
    type: actions.IMAGES_RECEIVED,
  }];

  store.dispatch(actions.fetchImages()).then(() =>
    expect(store.getActions()).toEqual(expectedActions)
  );
});
