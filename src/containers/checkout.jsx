// vendor import
import React from 'react';

// local import
import CheckoutSummary from '../components/Order/CheckoutSummary';


class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }
    render() {
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        );

    }
}
// export
export default Checkout;