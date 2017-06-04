import { connect } from 'react-redux';

import {
  addToFavourites,
  removeFromFavourites,
  fetchImages,
} from '../actions/gallery';
import Gallery from '../components/gallery';

const mapDispatchToProps = {
  addToFavourites,
  removeFromFavourites,
  fetchImages,
};

export default connect(state => state, mapDispatchToProps)(Gallery);
