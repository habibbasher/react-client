import React from 'react';
import PropTypes from 'prop-types';

import HOC from '../../../hocomp/HOComp';
import Button from '../../ui/button/Button';

const OrderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
   .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>
            {igKey}
          </span>:
          {props.ingredients[igKey]}
        </li>
      );
   }) ;
  return (
    <HOC>
      <h3>Your Order</h3>
      <p>A delicious burger with the follewing ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </HOC>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired
};

export default OrderSummary;
