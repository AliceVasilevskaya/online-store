import React from "react";
import { useDispatch } from "react-redux";
import CartList from "./CartList";
import CartSelectors from "../../store/cart/cart-selectors";
import {
  addProductToCart,
  deleteAllProductsByType,
  deleteProductFromCart,
} from "../../store/cart/cart-async-actions";

const CartContainer = function () {
  const { items, totalPrice } = CartSelectors();
  const dispatch = useDispatch();
  const addProduct = (productItem, quantity) => {
    dispatch(addProductToCart(productItem, quantity));
  };
  const deleteProduct = (productItem, quantity) => {
    dispatch(deleteProductFromCart(productItem, quantity));
  };
  const deleteProductsByType = (productItem) => {
    dispatch(deleteAllProductsByType(productItem));
  };
  return (
    <CartList
      totalPrice={totalPrice}
      cartItems={items}
      addProductToCart={addProduct}
      deleteProductFromCart={deleteProduct}
      deleteAllProductsByType={deleteProductsByType}
    />
  );
};

export default CartContainer;
