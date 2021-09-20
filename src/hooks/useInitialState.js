import { useState } from 'react';
import initialState from '../initialState';

// Hook que crea estado inicial, añade elementos
// al estado y también los elimina
// Agregamos y eliminamos del carrito

function useInitialState() {
  const [state, setState] = useState(initialState);

  // Esto es parecido a tener un reducer
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (items, indexCurrent) =>
          items.id !== payload.id || indexCurrent !== indexToRemove
      ),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  const addBuyerCoordinates = (payload) => {
    setState({
      ...state,
      coordinates: payload,
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    addBuyerCoordinates,
    state,
  };
}

export default useInitialState;
