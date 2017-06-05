import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import * as actions from '../actions/filter';
import Button from '../components/filter_button';

const Filter = ({ activeFilter, filter }) => (
  <div>
    <section className="filter">
      filter by:
      <Button
        active={ activeFilter === 'all' }
        label={ 'all' }
        onClick={ () => filter('all') }
      />
      <Button
        active={ activeFilter === 'favourites' }
        highlight
        label={ 'favourites' }
        onClick={ () => filter('favourites') }
      />
    </section>
  </div>
);

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.filter;
const mapDispatchToProps = pick(actions, 'filter');

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
