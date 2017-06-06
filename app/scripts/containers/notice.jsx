import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import classList from '../helpers/class_list';

export const Notice = ({ error, icon, info }) => (
  <section className={ classList('notice', { error, info }) }>
    { icon &&
      <img
        src={ `${icon}.svg` }
        alt={ icon }
        className={ `notice__icon notice__icon--${icon}` }
      />
    }
    { error || info }
  </section>
);

Notice.defaultProps = {
  error: '',
  icon: '',
  info: '',
};

Notice.propTypes = {
  error: PropTypes.string,
  icon: PropTypes.string,
  info: PropTypes.string,
};

const mapStateToProps = state => pick(state.gallery, 'error', 'icon', 'info');

export default connect(mapStateToProps)(Notice);
