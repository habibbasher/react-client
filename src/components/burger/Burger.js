import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './burger-ingredient/BurgerIngredient';

const burger = (props) => {

  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
