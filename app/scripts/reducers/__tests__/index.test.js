import { combineReducers } from 'redux';

import filter from '../filter';
import gallery from '../gallery';

jest.mock('redux');

require('../');

it('should combine the filter and gallery reducers', () => {
  expect(combineReducers).toBeCalledWith({ filter, gallery });
});
