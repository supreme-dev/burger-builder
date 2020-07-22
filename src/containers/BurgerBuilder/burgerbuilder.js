// vendor import
import React from 'react';

// local imports
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasable: false,
    purchasing: false,
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
    this.updatePurchasaeState(updateIngredients);
  };

  // remove ingredients
  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    // check if the inredients are available
    if (oldCount <= 0) {
    }
    const updatedCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchasaeState(updateIngredients);
  };

  // Purchase and check the ingredients is less than zero
  updatePurchasaeState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((iKey) => {
        return ingredients[iKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  // purchase handler
  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  s;

  // cancel the purchase
  purchaseCancelhandler = () => {
    this.setState({ purchasing: false });
  };

  // continue the purchase
  purchaseContinueHandler = () => {
    alert('You continue!');
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelhandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCanceled={this.purchaseCancelhandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientsHandler}
          ingredientsRemoved={this.removeIngredientsHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandler}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}
// export
export default BurgerBuilder;
