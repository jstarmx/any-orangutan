import React from 'react';
import PropTypes from 'prop-types';

import classList from '../helpers/class_list';

const Button = ({ active, highlight, label, onClick }) => (
  <button
    className={ classList('filter__button', { active, highlight }) }
    onClick={ onClick }
  >
    { label }
  </button>
);

Button.defaultProps = {
  highlight: false,
};

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  highlight: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
