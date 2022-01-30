import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import CartList from "./CartList";
import CartSelectors from "../../store/cart/cart-selectors";
import {
  addProductToCart,
  deleteAllProductsByType,
  deleteProductFromCart,
} from "../../store/cart/cart-async-actions";
import ROUTES from "../../routes/pathsOfRoutes";
import { getOrdersActions } from "../../store/orders/orders-actions";
import ordersApi from "../../api/orders-api";

const CartContainer = function () {
  const { items, totalPrice } = CartSelectors();
  const dispatch = useDispatch();
  const history = useHistory();
  const addProduct = (productItem, quantity) => {
    dispatch(addProductToCart(productItem, quantity));
  };
  const deleteProduct = (productItem, quantity) => {
    dispatch(deleteProductFromCart(productItem, quantity));
  };
  const deleteProductsByType = (productItem) => {
    dispatch(deleteAllProductsByType(productItem));
  };
  const onBuyClick = (order) => {
    // dispatch(postOrder({ order }));

    // Change logic according to HM#4
    dispatch(
      getOrdersActions.init({
        requestFunction: ordersApi.postMyOrder,
        params: order,
      })
    );
    history.push(ROUTES.ORDERS);
  };
  return (
    <CartList
      onBuyClick={onBuyClick}
      totalPrice={totalPrice}
      cartItems={items}
      addProductToCart={addProduct}
      deleteProductFromCart={deleteProduct}
      deleteAllProductsByType={deleteProductsByType}
    />
  );
};

export default CartContainer;
