// vendor import
import React from 'react';

// local imports
import Aux from '../../../hoc/aux';
import Button from '../../UI/Buttons';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((iKey) => {
    return (
      <li key={iKey}>
        <span className="cap">{iKey}:</span> {props.ingredients[iKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>{' '}
      </p>
      <p>Continue to Checkout?</p>
      <Button className="cap" btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button className="cap" btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

// export
export default orderSummary;
