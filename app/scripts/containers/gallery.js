import { connect } from 'react-redux';

import { fetchImages } from '../actions/gallery';
import Gallery from '../components/gallery';

export default connect(state => state, { fetchImages })(Gallery);
