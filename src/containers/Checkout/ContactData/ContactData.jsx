import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classeNames from './ContactData.module.css';

const ContactData = ({ ingredients }) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const orderClickHandler = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    const orderData = {
      ingredients,
      price: 35,
      customer: {
        name: 'Sumit',
        address: {
          street: 'plot no 54',
          zipcode: 432212,
        },
      },
    };
    axios.post('/orders.json', orderData)
      .then(() => {
        setShowSpinner(false);
      })
      .catch(() => {
        setShowSpinner(false);
      });
  };
  return (
    <div className={classeNames.ContactData}>
      {showSpinner ? <Spinner /> : null}
      <h4>Enter your contact data</h4>
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <Button btnType="Success" clicked={orderClickHandler}>ORDER</Button>
      </form>
    </div>
  );
};

ContactData.propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number,
    meat: PropTypes.number,
    bacon: PropTypes.number,
    cheese: PropTypes.number,
  }).isRequired,
};

export default ContactData;
