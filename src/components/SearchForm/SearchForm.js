import React from 'react';
import { StyledSearchForm } from './styles';

const SearchForm = ({
  city,
  filter,
  handleCityInput,
  handleSearchSubmit,
  handleFilter,
}) => {
  return (
    <StyledSearchForm onSubmit={handleSearchSubmit}>
      <div>
        <label htmlFor="search-city-input">Search by city: </label>
        <input
          id="search-city-input"
          type="text"
          value={city}
          onChange={handleCityInput}
        />
        <button type="submit">search city</button>
      </div>
      <div>
        <label htmlFor="filter-results-input">Filter results: </label>
        <input
          id="filter-results-input"
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;
