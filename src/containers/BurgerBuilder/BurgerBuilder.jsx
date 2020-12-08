/* eslint-disable guard-for-in */
import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = () => {
  const [state, setState] = useState({
    ingredients: '',
    totalPrice: 4,
  });

  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((acc, el) => acc + el, 0);
    setPurchasable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const oldCount = state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    updatePurchaseState(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    setShowSpinner(true);
    const orderData = {
      ingredients: state.ingredients,
      price: state.totalPrice,
      customer: {
        name: 'Sumit',
        address: {
          street: 'plot no 54',
          zipcode: 432212,
        },
      },
    };
    axios.post('/orders.json', orderData)
      .then(() => {
        setShowSpinner(false);
        setPurchasing(false);
      })
      .catch(() => {
        setShowSpinner(false);
      });
  };

  useEffect(() => {
    axios.get('/ingredients.json').then((response) => setState({
      ...state,
      ingredients: response.data,
    }));
  }, []);

  const disabledInfo = {
    ...state.ingredients,
  };
  // eslint-disable-next-line guard-for-in
  // eslint-disable-next-line no-restricted-syntax
  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  return (
    <Aux>
      {showSpinner ? <Spinner /> : null}
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={state.ingredients}
          price={state.totalPrice}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        purchasable={purchasable}
        ordered={purchaseHandler}
        price={state.totalPrice}
      />
    </Aux>
  );
};

export default BurgerBuilder;
