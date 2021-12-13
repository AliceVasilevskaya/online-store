import React from "react";
import { Link } from "react-router-dom";
import cart from "../../common/images/cartIcon.png";
import styles from "./CartIcon.module.css";

const CartIcon = function ({ totalPrice }) {
  return (
    <div className={styles.cartIcon}>
      <Link to="/cart">
        <img src={cart} alt="" />
        <div className={styles.totalPrice}>${totalPrice}</div>
      </Link>
    </div>
  );
};
export default CartIcon;
