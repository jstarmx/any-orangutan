import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { bindAll } from 'lodash';

const formattedDate = date => format(new Date(date), 'Do MMM YYYY');

class Item extends Component {
  constructor() {
    super();
    bindAll(this, 'toggleFavourite');
  }

  toggleFavourite() {
    const {
      addToFavourites,
      favourite,
      link,
      removeFromFavourites,
    } = this.props;

    return favourite ? removeFromFavourites(link) : addToFavourites(link);
  }

  render() {
    const { date, favourite, path, link, title } = this.props;

    return (
      <div className={ `item ${favourite ? 'item--favourite' : ''}` }>
        <a href={ link } target="_blank" rel="noopener noreferrer">
          <img src={ path } alt={ title } className="item__image" />
        </a>
        <p className="item__title">{ title }</p>
        <p className="item__date">{ formattedDate(date) }</p>
        <button
          className="item__button"
          onClick={ this.toggleFavourite }
        >
          <img
            src={ favourite ? 'heart_full.svg' : 'heart_empty.svg' }
            alt={ favourite ? 'Remove from favourites' : 'Add to favourites' }
            className="item__icon"
          />
          { favourite ? 'Favourited!' : 'Favourite' }
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  addToFavourites: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  favourite: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  removeFromFavourites: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
