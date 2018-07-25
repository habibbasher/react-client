import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation-items/NavigationItems';
import DrawerToggle from '../side-drawer/drawer-toggle/DrawerToggle';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

Toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired
};

export default Toolbar;
