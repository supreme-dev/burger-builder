// vendor import
import React from 'react';

// local import
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// global price
const INGREDIENTS_PRICE = {
  salad: 0.7,
  bacon: 0.5,
  meat: 0.3,
  cheese: 0.4,
};
// burger component
class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 5,
  };

  // add ingredients
  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientsAdded={this.addIngredientsHandler} />
      </Aux>
    );
  }
}
// export
export default BurgerBuilder;
