import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigation-items/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../ui/backdrop/Backdrop';
import HOC from '../../../hocomp/HOComp';

const SideDrawer = (props) => {

  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return(
    <HOC>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </HOC>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired
};

export default SideDrawer;
