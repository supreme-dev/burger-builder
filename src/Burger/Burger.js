// vendor import
import React from 'react';

// local import
import BurgerIngredient from './BurgerIng/BurgerIngredients';

const burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

// export
export default burger;
