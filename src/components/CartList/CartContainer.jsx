import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { getItems, getTotalPrice } from "../../store/cart/cart-selectors";
import {
  addProductToCart,
  deleteAllProductsByType,
  deleteProductFromCart,
} from "../../store/cart/cart-slice";

const CartContainer = function () {
  const totalPrice = useSelector(getTotalPrice);
  const items = useSelector(getItems);
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
