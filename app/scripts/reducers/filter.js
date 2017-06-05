import { FILTER } from '../actions/filter';

const initialState = {
  activeFilter: 'all',
};

export default (state = initialState, { data, type }) => {
  switch (type) {
    case FILTER:
      return {
        ...state,
        activeFilter: data,
      };

    default:
      return state;
  }
};
