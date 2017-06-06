import fetch from '../helpers/fetch';

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const FETCHING_IMAGES = 'FETCHING_IMAGES';
export const IMAGES_RECEIVED = 'IMAGES_RECEIVED';
export const ERROR = 'ERROR';

export const addToFavourites = data => ({
  data,
  type: ADD_TO_FAVOURITES,
});

export const removeFromFavourites = data => ({
  data,
  type: REMOVE_FROM_FAVOURITES,
});

export const updateImages = data => ({
  data,
  type: IMAGES_RECEIVED,
});

export const fetchImages = () => (dispatch) => {
  dispatch({ type: FETCHING_IMAGES });

  return fetch('https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=flickrcb&tags=orangutan')
    .then(response => dispatch(updateImages(response.items)))
    .catch(() => dispatch({ type: ERROR }));
};
