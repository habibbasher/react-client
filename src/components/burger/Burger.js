import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.css';
import BurgerIngredient from './burger-ingredient/BurgerIngredient';

const Burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey}/>;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);

  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
};

export default Burger;
