import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './item';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const { favouriteImage, favourites, items } = this.props;

    return (
      <div className="gallery">
        { items.map(item => (
          <Item
            date={ item.date_taken }
            favourite={ favourites.includes(item.link) }
            favouriteImage={ favouriteImage }
            path={ item.media.m }
            link={ item.link }
            title={ item.title }
            key={ item.link }
          />
        )) }
      </div>
    );
  }
}

Gallery.propTypes = {
  favouriteImage: PropTypes.func.isRequired,
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

export default Gallery;
