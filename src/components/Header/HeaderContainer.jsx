import React from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import Header from "./Header";
import { getTotalPrice } from "../../store/cart/cart-selectors";

const HeaderContainer = function () {
  const totalPrice = useSelector(getTotalPrice);
  const params = useLocation();
  return <Header totalPrice={totalPrice} params={params} />;
};

export default HeaderContainer;
