import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter, pick } from 'lodash';

import * as actions from '../actions/gallery';
import Item from './item';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  favouritedItems() {
    const { favourites, items } = this.props;
    return filter(items, item => favourites.includes(item.link));
  }

  items() {
    const { activeFilter, items } = this.props;
    return activeFilter === 'all' ? items : this.favouritedItems();
  }

  render() {
    return (
      <section className="gallery">
        { this.items().map(item => (
          <Item
            date={ item.date_taken }
            favourite={ this.props.favourites.includes(item.link) }
            path={ item.media.m }
            link={ item.link }
            title={ item.title }
            key={ item.link }
          />
        )) }
      </section>
    );
  }
}

Gallery.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  favourites: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchImages: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    date_taken: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    media: PropTypes.shape({
      m: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ ...state.filter, ...state.gallery });
const mapDispatchToProps = pick(actions, 'fetchImages');

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
