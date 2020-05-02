import React, { useState, useEffect, useCallback, useReducer } from 'react';
import axios from 'axios';
import SearchForm from '../../components/SearchForm/SearchForm.js';
import List from '../../components/List/List.js';
import { restaurantsReducer } from '../../reducers/restaurantsReducer.js';

const API_ENDPOINT = 'http://opentable.herokuapp.com/api/restaurants?city=';

const Search = () => {
  const [restaurants, dispatchRestaurants] = useReducer(restaurantsReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });
  const [city, setCity] = useState('toronto');
  const [url, setUrl] = useState(`${API_ENDPOINT}${city}`);

  const handleFetchRestaurants = useCallback(() => {
    dispatchRestaurants({ type: 'RESTAURANTS_FETCH_INIT' });

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        dispatchRestaurants({
          type: 'RESTAURANTS_FETCH_SUCCESS',
          payload: response.data.restaurants,
        });
      } catch {
        dispatchRestaurants({ type: 'FETCH_RESTAURANTS_FAILURE' });
      }
    };
    fetchRestaurants();
  }, [url]);

  useEffect(() => {
    handleFetchRestaurants();
  }, [handleFetchRestaurants]);

  const handleCityInput = (event) => {
    setCity(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setUrl(`${API_ENDPOINT}${city}`);
  };

  return (
    <div>
      <p>Search</p>
      <SearchForm
        city={city}
        handleCityInput={handleCityInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      <List
        restaurants={restaurants.data}
        isLoading={restaurants.isLoading}
        isError={restaurants.isError}
      />
    </div>
  );
};

export default Search;
