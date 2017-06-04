import { connect } from 'react-redux';

import { favouriteImage, fetchImages } from '../actions/gallery';
import Gallery from '../components/gallery';

const mapDispatchToProps = { favouriteImage, fetchImages };

export default connect(state => state, mapDispatchToProps)(Gallery);
