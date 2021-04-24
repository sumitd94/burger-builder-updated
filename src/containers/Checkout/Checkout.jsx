/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

import classNames from './Checkout.module.css';

const Checkout = (props) => {
  const [ingredients] = useState({
    meat: 0,
    salad: 0,
    cheese: 0,
    bacon: 0,
  });
  const queryParams = new URLSearchParams(props.location.search);
  for (const [key, value] of queryParams.entries()) {
    ingredients[key] = parseInt(value, 10);
  }

  const cancelCheckoutHandler = () => {
    props.history.goBack();
  };

  const continueCheckoutHandler = () => {
    props.history.replace('/checkout/contact-details');
  };

  return (
    <div className={classNames.checkoutContainer}>
      <CheckoutSummary
        ingredients={ingredients}
        onCancel={cancelCheckoutHandler}
        onContinue={continueCheckoutHandler}
      />
      <Route path={`${props.match.path}/contact-details`} render={() => (<ContactData ingredients={ingredients} />)} />
    </div>
  );
};

Checkout.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

export default Checkout;
