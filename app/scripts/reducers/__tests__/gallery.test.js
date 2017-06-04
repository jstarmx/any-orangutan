import gallery from '../gallery';
import * as actions from '../../actions/gallery';

it('should return the initial state', () => {
  const expectedState = {
    favourites: [],
    items: [],
  };

  expect(gallery(undefined, {})).toEqual(expectedState);
});

it('should handle FAVOURITE_IMAGE', () => {
  const action = {
    data: 'image1',
    type: actions.FAVOURITE_IMAGE,
  };
  const expectedState = {
    favourites: ['image1'],
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
    favourites: [],
    items: ['image1', 'image2'],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});
