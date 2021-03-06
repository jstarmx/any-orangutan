import { without } from 'lodash';

import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  FETCHING_IMAGES,
  IMAGES_RECEIVED,
  ERROR,
} from '../actions/gallery';

const initialState = {
  error: '',
  favourites: [],
  icon: '',
  info: '',
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

    case FETCHING_IMAGES:
      return {
        ...state,
        icon: 'loading',
        info: 'loading orangutans...',
      };

    case IMAGES_RECEIVED:
      return {
        ...state,
        error: '',
        icon: '',
        info: '',
        items: data,
      };

    case ERROR:
      return {
        ...state,
        icon: 'error',
        error: 'an error occurred connecting to flickr, please check your internet connection.',
      };

    default:
      return state;
  }
};
