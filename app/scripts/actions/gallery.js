import fetch from '../helpers/fetch';

export const FAVOURITE_IMAGE = 'FAVOURITE_IMAGE';
export const IMAGES_RECEIVED = 'IMAGES_RECEIVED';

export const favouriteImage = data => ({
  data,
  type: FAVOURITE_IMAGE,
});

export const updateImages = data => ({
  data,
  type: IMAGES_RECEIVED,
});

export const fetchImages = () => dispatch =>
  fetch('http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=flickrcb&tags=orangutan')
  .then(response => dispatch(updateImages(response.items)));
