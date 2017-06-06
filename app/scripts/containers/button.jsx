import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindAll, pick } from 'lodash';

import * as actions from '../actions/filter';
import classList from '../helpers/class_list';

export class Button extends Component {
  constructor() {
    super();
    bindAll(this, 'filter');
  }

  filter() {
    this.props.filter(this.props.label);
  }

  render() {
    const { activeFilter, highlight, label } = this.props;

    return (
      <button
        type="button"
        className={ classList('filter__button', {
          active: activeFilter === label,
          highlight,
        }) }
        onClick={ this.filter }
      >
        { label }
      </button>
    );
  }
}

Button.defaultProps = {
  highlight: false,
};

Button.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
  highlight: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

const mapStateToProps = state => pick(state.filter, 'activeFilter');
const mapDispatchToProps = pick(actions, 'filter');

export default connect(mapStateToProps, mapDispatchToProps)(Button);
