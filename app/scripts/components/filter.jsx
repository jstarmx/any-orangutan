import React from 'react';

import ConnectedButton from '../containers/button';

const Filter = () => (
  <div>
    <section className="filter">
      filter by:
      <ConnectedButton label="all" />
      <ConnectedButton label="favourites" highlight />
    </section>
  </div>
);

export default Filter;
