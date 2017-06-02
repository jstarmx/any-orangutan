import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

const Gallery = ({ items }) => (
  <div className="gallery">
    { items.map(item => (
      <Item
        date={ item.date_taken }
        path={ item.media.m }
        link={ item.link }
        title={ item.title }
        key={ item.link }
      />
    )) }
  </div>
);

Gallery.propTypes = {
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
