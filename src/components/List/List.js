import React from 'react';
import Restaurant from '../../components/Restaurant/Restaurant.js';
import { StyledList } from './styles';

const List = ({ restaurants, isLoading, isError }) => {
  return (
    <>
      {isError && (
        <div>
          <h3>Something went wrong fetching the data</h3>
        </div>
      )}
      {isLoading ? (
        <div>
          <h3>Loading...</h3>
        </div>
      ) : (
        <StyledList>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              address={restaurant.address}
              area={restaurant.area}
              city={restaurant.city}
              country={restaurant.country}
              name={restaurant.name}
              phone={restaurant.phone}
              zip={restaurant.postal_code}
              price={restaurant.price}
              state={restaurant.state}
            />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default List;
