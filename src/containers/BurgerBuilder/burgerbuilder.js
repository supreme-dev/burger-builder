// vendor import
import React from 'react';

// local import
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';

// burger component
class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Aux>
    );
  }
}
// export
export default BurgerBuilder;
