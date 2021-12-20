import React from "react";
import { useLocation } from "react-router";
import Header from "./Header";
import { useCart } from "../../context/cart/cart-context";

const HeaderContainer = function () {
  const { state } = useCart();
  const params = useLocation();
  return <Header totalPrice={state.totalPrice} params={params} />;
};

export default HeaderContainer;
