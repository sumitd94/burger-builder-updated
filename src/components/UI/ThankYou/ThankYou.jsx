import React from 'react';
import { NavLink } from 'react-router-dom';
import PartyPopper from '../../../assets/images/party-popper.svg';
import classNames from './ThankYou.module.css';

const ThankYou = () => (
  <div className={classNames.ThankYouContainer}>
    <div className={classNames.partyPopper}>
      <img src={PartyPopper} alt="partyPopper" />
    </div>
    <div className={classNames.thankContent}>
      <span className={classNames.thankMessage}>Your order is Complete!</span>
      <p className={classNames.orderStatus}>
        You can check your orders
        {' '}
        <NavLink to="/orders">here</NavLink>
      </p>
    </div>
  </div>
);

export default ThankYou;
