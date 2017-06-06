import { combineReducers } from 'redux';

import filter from './filter';
import gallery from './gallery';

export default combineReducers({ filter, gallery });
