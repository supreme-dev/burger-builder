// vendor import
import React from 'react';

// local imports
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/witherrorhandler';

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
    ingredients: null,
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    isLoading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get('https://burger-builder-react-b0b56.firebaseio.com/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
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
    this.setState({ isLoading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Hope',
        address: {
          street: 'Avenue street',
          zipCode: '2311',
          country: 'India',
        },
        email: 'hopebase@gmail.com',
      },
      deliveryMode: 'quickest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        console.log('axios res', response);
        this.setState({ isLoading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false, purchasing: false });
        console.log('axios error', error);
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? <p>Ingredient's cannot be loaded! </p> : <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseCanceled={this.purchaseCancelhandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.isLoading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelhandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
// export
export default withErrorHandler(BurgerBuilder, axios);
