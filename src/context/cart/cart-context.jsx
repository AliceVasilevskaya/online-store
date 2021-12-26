import React, { createContext, useMemo } from "react";
import cartReducer, { actions } from "./cart-reducer";

const CartContext = createContext();

export const initialState = {
  items: [],
  totalPrice: null,
};

const CartContextProvider = function ({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);
  const addProductToCart = (productItem, quantity) => {
    dispatch(actions.addProductToCart(productItem, quantity));
    dispatch(actions.setTotalPrice());
  };
  const value = useMemo(
    () => ({ state, dispatch, addProductToCart }),
    [state, dispatch, addProductToCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart, CartContextProvider };
