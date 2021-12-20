import React from "react";
import { Link } from "react-router-dom";
import cart from "../../ui-kit/images/cartIcon.png";
import styles from "./CartIcon.module.css";
import ROUTES from "../../routes/pathsOfRoutes";

const CartIcon = function ({ totalPrice }) {
  return (
    <div className={styles.cartIcon}>
      <Link to={ROUTES.CART}>
        <img src={cart} alt="" />
        <div className={styles.totalPrice}>${totalPrice}</div>
      </Link>
    </div>
  );
};
export default CartIcon;
