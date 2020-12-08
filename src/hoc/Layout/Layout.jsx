import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = ({ children }) => {
  const [state, setState] = useState({ showSideDrawer: false });

  const sideDrawerClosedHandler = () => {
    setState({ showSideDrawer: false });
  };

  const sideDrawerToggleHandler = () => {
    setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        open={state.showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>
        {children}
      </main>
    </Aux>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
