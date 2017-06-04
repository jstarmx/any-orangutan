import { FAVOURITE_IMAGE, IMAGES_RECEIVED } from '../actions/gallery';

const initialState = {
  favourites: [],
  items: [],
};

export default (state = initialState, { data, type }) => {
  switch (type) {
    case FAVOURITE_IMAGE:
      return {
        ...state,
        favourites: [...state.favourites, data],
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
