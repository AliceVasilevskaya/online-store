import React from "react";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import styles from "./Header.module.css";
import CartIcon from "../CartIcon/CartIcon";
import ROUTES from "../../routes/pathsOfRoutes";

const Header = function (props) {
  const { totalPrice, pathname } = props;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to={ROUTES.PRODUCTS}>Products</Link>
        </div>
        <div className={styles.right}>
          {pathname === ROUTES.CART ? null : (
            <CartIcon totalPrice={totalPrice} />
          )}
        </div>
      </div>
    </header>
  );
};
Header.propTypes = {
  totalPrice: PropTypes.number,
  pathname: PropTypes.string,
};
Header.defaultProps = {
  totalPrice: PropTypes.number,
  pathname: PropTypes.string,
};
export default Header;
