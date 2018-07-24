import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img alt="MyBurger" src={burgerLogo} />
  </div>
);

export default Logo;