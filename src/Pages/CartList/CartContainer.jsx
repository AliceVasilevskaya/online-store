import React from "react";
import { useCart } from "./cart-context";
import CartList from "./CartList";

const CartContainer = function () {
  const {
    state: { totalPrice, items },
  } = useCart();
  return <CartList totalPrice={totalPrice} cartItems={items} />;
};
export default CartContainer;
