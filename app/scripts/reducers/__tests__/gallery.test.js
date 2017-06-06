import gallery from '../gallery';
import * as actions from '../../actions/gallery';

it('should return the initial state', () => {
  const expectedState = {
    error: '',
    favourites: [],
    info: '',
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
    error: '',
    favourites: ['image1'],
    info: '',
    items: [],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});

it('should handle REMOVE_FROM_FAVOURITES', () => {
  const initialState = {
    error: '',
    favourites: ['image1'],
    info: '',
    items: [],
  };
  const action = {
    data: 'image1',
    type: actions.REMOVE_FROM_FAVOURITES,
  };
  const expectedState = {
    error: '',
    favourites: [],
    info: '',
    items: [],
  };

  expect(gallery(initialState, action)).toEqual(expectedState);
});

it('should handle FETCHING_IMAGES', () => {
  const action = {
    type: actions.FETCHING_IMAGES,
  };
  const expectedState = {
    error: '',
    favourites: [],
    info: 'loading orangutans...',
    items: [],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});

it('should handle IMAGES_RECEIVED', () => {
  const action = {
    data: ['image1', 'image2'],
    type: actions.IMAGES_RECEIVED,
  };
  const expectedState = {
    error: '',
    favourites: [],
    info: '',
    items: ['image1', 'image2'],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});

it('should handle ERROR', () => {
  const action = {
    type: actions.ERROR,
  };
  const expectedState = {
    error: 'an error occurred connecting to flickr, please check your internet connection.',
    favourites: [],
    info: '',
    items: [],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});
