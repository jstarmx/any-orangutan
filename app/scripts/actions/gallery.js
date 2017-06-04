import fetch from '../helpers/fetch';

export const IMAGES_RECEIVED = 'IMAGES_RECEIVED';

export const updateImages = data => ({
  data,
  type: IMAGES_RECEIVED,
});

export const fetchImages = () => dispatch =>
  fetch('http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=flickrcb&tags=orangutan')
  .then(response => dispatch(updateImages(response.items)));
