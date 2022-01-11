import React from "react";
import { useLocation } from "react-router";
import Header from "./Header";
import CartSelectors from "../../store/cart/cart-selectors";

const HeaderContainer = function () {
  const { totalPrice } = CartSelectors();
  const params = useLocation();
  return <Header totalPrice={totalPrice} params={params} />;
};

export default HeaderContainer;
