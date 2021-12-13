import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CartIcon from "../CartIcon/CartIcon";

const Header = function ({ totalPrice, params }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to="/products">Products</Link>
        </div>
        <div className={styles.right}>
          {params.pathname === "/cart" ? null : (
            <CartIcon totalPrice={totalPrice} />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
