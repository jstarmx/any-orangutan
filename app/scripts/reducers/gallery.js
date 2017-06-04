import { without } from 'lodash';

import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  IMAGES_RECEIVED,
} from '../actions/gallery';

const initialState = {
  favourites: [],
  items: [],
};

export default (state = initialState, { data, type }) => {
  switch (type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, data],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: without(state.favourites, data),
      };

    case IMAGES_RECEIVED:
      return {
        ...state,
        items: data,
      };

    default:
      return state;
  }
};
