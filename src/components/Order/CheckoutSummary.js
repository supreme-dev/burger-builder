// vendor import
import React from 'react';

// local imports
import Burger from '../Burger/Burger';
import Button from '../UI/Buttons';

const checkoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h2>We hope it tastes good!</h2>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger cap" clicked>
        Cancel{' '}
      </Button>
      <Button btnType="Success cap" clicked>
        Continue{' '}
      </Button>
    </div>
  );
};

// export
export default checkoutSummary;
