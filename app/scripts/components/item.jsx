import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

const formattedDate = date => format(new Date(date), 'Do MMM YYYY');

const Item = ({ date, path, link, title }) => (
  <div className="item">
    <a href={ link } target="_blank" rel="noopener noreferrer">
      <img src={ path } alt={ title } className="item__image" />
    </a>
    <p className="item__title">{ title }</p>
    <p className="item__date">{ formattedDate(date) }</p>
    <button className="item__button">
      <img
        src="heart_empty.svg"
        alt="Not currently favourited"
        className="item__icon"
      />
      Favourite
    </button>
  </div>
);

Item.propTypes = {
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
