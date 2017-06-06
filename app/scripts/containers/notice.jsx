import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import classList from '../helpers/class_list';

export const Notice = ({ error, info }) => (
  <div className={ classList('notice', { error, info }) }>
    { error || info }
  </div>
);

Notice.defaultProps = {
  error: '',
  info: '',
};

Notice.propTypes = {
  error: PropTypes.string,
  info: PropTypes.string,
};

const mapStateToProps = state => pick(state.gallery, 'error', 'info');

export default connect(mapStateToProps)(Notice);
