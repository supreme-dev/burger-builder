// vendor import
import React from 'react';

// local import
import BurgerIngredient from './BurgerIng/BurgerIngredients';

const burger = (props) => {
  // converting props of ingredients which is an object into an array
  let transformedIngredients = Object.keys(props.ingredients)
    .map((iKey) => {
      return [...Array(props.ingredients[iKey])] // create as many element we have in ingredients
        .map((_, i) => {
          return <BurgerIngredient key={iKey + i} type={iKey} />;
        });
    })
    .reduce((arr, el) => {
      console.log('arr', arr, 'el', el);
      return arr.concat(el);
    }, []);

  // check the burger ingredients
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add the ingredients</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

// export
export default burger;
