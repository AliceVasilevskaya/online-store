import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import CartIcon from "../CartIcon/CartIcon";
import ROUTES from "../../routes/pathsOfRoutes";

const Header = function ({ totalPrice, params }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to={ROUTES.PRODUCTS}>Products</Link>
        </div>
        <div className={styles.right}>
          {params.pathname === ROUTES.CART ? null : (
            <CartIcon totalPrice={totalPrice} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
