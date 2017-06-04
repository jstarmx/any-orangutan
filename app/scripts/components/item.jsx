import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const formattedDate = date => format(new Date(date), 'Do MMM YYYY');

const Item = ({ date, favourite, favouriteImage, path, link, title }) => (
  <div className="item">
    <a href={ link } target="_blank" rel="noopener noreferrer">
      <img src={ path } alt={ title } className="item__image" />
    </a>
    <p className="item__title">{ title }</p>
    <p className="item__date">{ formattedDate(date) }</p>
    <button
      className={ `item__button ${favourite ? 'item__button--favourite' : ''}` }
      onClick={ () => favouriteImage(link) }
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

Item.propTypes = {
  date: PropTypes.string.isRequired,
  favourite: PropTypes.bool.isRequired,
  favouriteImage: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
