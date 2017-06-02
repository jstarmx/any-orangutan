import { IMAGES_RECEIVED } from '../actions/gallery';

const initialState = {
  items: [],
};

export default (state = initialState, { data, type }) => {
  switch (type) {
    case IMAGES_RECEIVED:
      return {
        ...state,
        items: data,
      };

    default:
      return state;
  }
};
