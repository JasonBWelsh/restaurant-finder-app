import React from 'react';

const Restaurant = ({
  address,
  area,
  city,
  country,
  name,
  phone,
  zip,
  price,
  state,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <span>{city}</span>
      <span>{price}</span>
    </div>
  );
};

export default Restaurant;
