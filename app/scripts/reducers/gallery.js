import { without } from 'lodash';

import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  FETCHING_IMAGES,
  IMAGES_RECEIVED,
} from '../actions/gallery';

const initialState = {
  error: '',
  favourites: [],
  items: [],
  info: '',
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

    case FETCHING_IMAGES:
      return {
        ...state,
        info: 'loading orangutans...',
      };

    case IMAGES_RECEIVED:
      return {
        ...state,
        items: data,
        info: '',
      };

    default:
      return state;
  }
};
