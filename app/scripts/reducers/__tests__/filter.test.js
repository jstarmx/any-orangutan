import filter from '../filter';
import * as actions from '../../actions/filter';

it('should return the initial state', () => {
  const expectedState = {
    activeFilter: 'all',
  };

  expect(filter(undefined, {})).toEqual(expectedState);
});

it('should handle FILTER', () => {
  const action = {
    data: 'favourites',
    type: actions.FILTER,
  };
  const expectedState = {
    activeFilter: 'favourites',
  };

  expect(filter(undefined, action)).toEqual(expectedState);
});
