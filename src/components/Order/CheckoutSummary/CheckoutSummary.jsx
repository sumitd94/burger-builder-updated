import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classNames from './CheckoutSummary.module.css';

const CheckoutSummary = ({ ingredients, onCancel, onContinue }) => (
  <div className={classNames.CheckoutSummary}>
    <h1>Hope you like this burger !</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button btnType="Danger" clicked={onCancel}>CANCEL</Button>
    <Button btnType="Success" clicked={onContinue}>CONTINUE</Button>
  </div>
);

CheckoutSummary.propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number,
    meat: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default CheckoutSummary;
