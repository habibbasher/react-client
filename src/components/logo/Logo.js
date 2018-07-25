import React from 'react';
// import PropTypes from 'prop-types';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = () => (
  <div className={classes.Logo}>
    <img alt="MyBurger" src={burgerLogo} />
  </div>
);

// const Logo = (props) => (
//   <div className={classes.Logo} style={{height: props.height}}>
//     <img alt="MyBurger" src={burgerLogo} />
//   </div>
// );
//
// Logo.propTypes = {
//   height: PropTypes.string.isRequired
// };

export default Logo;
