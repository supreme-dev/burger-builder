// vendor import
import React from 'react';

// local import
import Aux from '../../../hoc/aux';

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
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

// export
export default orderSummary;
