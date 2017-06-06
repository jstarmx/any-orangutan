import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import format from 'date-fns/format';
import { bindAll, pick } from 'lodash';

import * as actions from '../actions/gallery';

const formattedDate = date => format(new Date(date), 'Do MMM YYYY');

export class Item extends Component {
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
        <a
          className="item__link"
          href={ link }
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ path } alt={ title } className="item__image" />
          <div className="item__open">View on Flickr...</div>
        </a>
        <p className="item__title">{ title }</p>
        <p className="item__date">{ formattedDate(date) }</p>
        <button
          type="button"
          className="item__button"
          onClick={ this.toggleFavourite }
          aria-pressed={ !!favourite }
        >
          <img
            src={ favourite ? 'heart_full.svg' : 'heart_empty.svg' }
            alt={ favourite ? 'Remove from favourites' : 'Add to favourites' }
            className="item__icon"
          />
          { favourite ? 'favourited!' : 'favourite' }
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

const mapDispatchToProps = pick(
  actions,
  'addToFavourites',
  'removeFromFavourites'
);

export default connect(null, mapDispatchToProps)(Item);
