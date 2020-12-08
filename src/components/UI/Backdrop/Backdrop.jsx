/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null
);

export default backdrop;
