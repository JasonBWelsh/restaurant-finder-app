import React from 'react';
import Restaurant from '../../components/Restaurant/Restaurant.js';

const List = ({ restaurants }) => {
  return (
    <div>
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
    </div>
  );
};

export default List;
