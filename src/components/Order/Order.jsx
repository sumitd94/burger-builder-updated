import React from 'react';
import PropTypes from 'prop-types';
import classNames from './Order.module.css';

const Order = ({ ingredients, price }) => {
  const ingredientsOutput = Object.keys(ingredients).map((key) => ({
    name: key,
    quantity: ingredients[key],
  }));

  const ingredientsText = ingredientsOutput.map(({ name, quantity }) => (
    <span
      key={name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        padding: '5px',
        margin: '0px 8px',
        border: '1px solid #ccc',
      }}
    >
      { name }
      {' '}
      (
      { quantity }
      )
    </span>
  ));

  return (
    <div className={classNames.Order}>
      <p>
        Ingredients:
        {ingredientsText}
      </p>
      <p>
        Price: USD
        {' '}
        {price}
      </p>
    </div>

  );
};

Order.propTypes = {
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.shape({
    meat: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
    salad: PropTypes.number,
  }).isRequired,
};

export default Order;
