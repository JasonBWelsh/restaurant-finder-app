import React from 'react';
import { StyledRestaurant } from './styles';

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
    <StyledRestaurant>
      <h3>{name}</h3>
      <span>{address}</span>
      <span>{`${city}, ${state}, ${country}`}</span>
      <span>{zip}</span>
      <span>Area: {area}</span>
      <span>Phone: {phone}</span>
      <span>Price rating: {price}</span>
    </StyledRestaurant>
  );
};

export default Restaurant;
