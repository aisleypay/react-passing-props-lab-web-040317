import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ updateFilterCallback, filter, filters, items }) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilterCallback} filters={filters} />
      <FilteredFruitList filter={filter} fruit={items} />
    </div>
  );
}

FruitBasket.defaultProps = {
  updateFilterCallback:() => {},
  currentFilter: null,
  filters: [],
  fruit: []
}

export default FruitBasket;
