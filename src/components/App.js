import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.fetchFilters = this.fetchFilters.bind(this)
  }

  componentWillMount() {
    this.fetchFilters();

    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit: items }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  render() {
    return (
      <FruitBasket updateFilterCallback={this.handleFilterChange} filter={this.state.currentFilter} filters={this.state.filters} items={this.state.fruit}/>
    )
  }
}

export default App;
