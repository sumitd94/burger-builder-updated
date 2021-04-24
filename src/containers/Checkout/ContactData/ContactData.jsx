/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classeNames from './ContactData.module.css';

const ContactData = ({ ingredients }) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setShowSpinner(true);
    const orderData = {
      ingredients,
      price: 35,
      customer: {
        ...data,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" placeholder="Your Name" {...register('name', { required: true })} />
        { errors.name && <span>Name is required</span> }
        <input type="email" name="email" placeholder="Your Email" {...register('email', { required: true })} />
        { errors.email && <span>Email is required</span> }
        <input type="text" name="phone" placeholder="Your Number" {...register('phone', { required: true, minLength: 10, maxLength: 10 })} />
        { errors.phone && <span>Phone number is required</span> }
        <input type="text" name="address" placeholder="Address line 1" {...register('address', { required: true })} />
        { errors.address && <span>We need your address</span> }
        <input type="text" name="city" placeholder="City" {...register('city', { required: true })} />
        { errors.city && <span>City is required</span> }
        <input type="text" name="zip" placeholder="Zip COde" {...register('zip', { required: true })} />
        { errors.zip && <span>Zip code is missing</span> }
        <button type="submit" className={classeNames.orderBtn}>ORDER</button>
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
