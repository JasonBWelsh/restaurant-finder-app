import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import List from '../../components/List/List.js';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiEndpoint: 'http://opentable.herokuapp.com/api/restaurants?city=',
      city: 'toronto',
      restaurants: [],
    };
  }

  componentDidMount() {
    console.log('inside `Search` componentDidMount');
    fetch(`${this.state.apiEndpoint}${this.state.city}`)
      .then((response) => response.json())
      .then((data) => this.setState({ restaurants: data.restaurants }));
  }

  render() {
    // const API_ENDPOINT = 'http://opentable.herokuapp.com/api/restaurants?city=toronto';
    return (
      <div>
        <p>Search</p>
        <SearchForm />
        <List restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default Search;
