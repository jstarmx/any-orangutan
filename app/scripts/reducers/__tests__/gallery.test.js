import gallery from '../gallery';
import * as actions from '../../actions/gallery';

it('should return the initial state', () => {
  const expectedState = {
    favourites: [],
    items: [],
  };

  expect(gallery(undefined, {})).toEqual(expectedState);
});

it('should handle ADD_TO_FAVOURITES', () => {
  const action = {
    data: 'image1',
    type: actions.ADD_TO_FAVOURITES,
  };
  const expectedState = {
    favourites: ['image1'],
    items: [],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});

it('should handle REMOVE_FROM_FAVOURITES', () => {
  const initialState = {
    favourites: ['image1'],
    items: [],
  };
  const action = {
    data: 'image1',
    type: actions.REMOVE_FROM_FAVOURITES,
  };
  const expectedState = {
    favourites: [],
    items: [],
  };

  expect(gallery(initialState, action)).toEqual(expectedState);
});

it('should handle IMAGES_RECEIVED', () => {
  const action = {
    data: ['image1', 'image2'],
    type: actions.IMAGES_RECEIVED,
  };
  const expectedState = {
    favourites: [],
    items: ['image1', 'image2'],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});
