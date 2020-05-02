import React from 'react';
import { StyledSearchForm } from './styles';

const SearchForm = ({ city, handleCityInput, handleSearchSubmit }) => {
  return (
    <StyledSearchForm onSubmit={handleSearchSubmit}>
      <h2>Search restaurants</h2>
      <div>
        <input
          id="search-city"
          type="text"
          value={city}
          onChange={handleCityInput}
        />
        <button type="submit">search city</button>
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;
