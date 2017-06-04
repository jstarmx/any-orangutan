import gallery from '../gallery';
import * as actions from '../../actions/gallery';

it('should return the initial state', () => {
  const expectedState = {
    items: [],
  };

  expect(gallery(undefined, {})).toEqual(expectedState);
});

it('should handle IMAGES_RECEIVED', () => {
  const action = {
    data: ['image1', 'image2'],
    type: actions.IMAGES_RECEIVED,
  };
  const expectedState = {
    items: ['image1', 'image2'],
  };

  expect(gallery(undefined, action)).toEqual(expectedState);
});
