import React from "react";
import { NavLink } from "react-router-dom";
import * as PropTypes from "prop-types";
import styles from "./Header.module.css";
import CartIcon from "../CartIcon/CartIcon";
import ROUTES from "../../routes/pathsOfRoutes";

const Header = function ({ totalPrice, pathname, onAddProductClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.body}>
          <NavLink
            to={`${ROUTES.PRODUCTS}${ROUTES.DEFAULT_FILTERS}`}
            activeClassName={styles.active}
          >
            All products
          </NavLink>
          <NavLink
            to={`${ROUTES.MY_PRODUCTS}${ROUTES.DEFAULT_FILTERS}`}
            activeClassName={styles.active}
          >
            My products
          </NavLink>
          <NavLink to={ROUTES.ORDERS} activeClassName={styles.active}>
            My orders
          </NavLink>
          <button
            className={styles.button}
            type="button"
            onClick={() => onAddProductClick()}
          >
            Add new product
          </button>
          <div className={styles.cart}>
            {pathname === ROUTES.CART ? null : (
              <CartIcon totalPrice={totalPrice} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  totalPrice: PropTypes.number,
  pathname: PropTypes.string,
  onAddProductClick: PropTypes.func,
};
Header.defaultProps = {
  totalPrice: 0,
  pathname: "",
  onAddProductClick: () => {},
};
export default Header;
