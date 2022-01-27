import { Link } from "react-router-dom";
import React from "react";
import * as PropTypes from "prop-types";
import styles from "../Cart.module.css";
import { cartItem, oneItem } from "../../../utils/constants";
import ROUTES from "../../../routes/pathsOfRoutes";

const CartItem = function ({
  item,
  addProductToCart,
  deleteAllProductsByType,
  deleteProductFromCart,
}) {
  const { id, name, price, quantity } = item;
  return (
    <tr className={styles.product}>
      <td className={styles.productName}>
        <Link to={`${ROUTES.PRODUCTS}/${id}`}>{name}</Link>
      </td>
      <td>{`$${price}`}</td>
      <td>
        <span>
          <button
            className="plus-btn"
            type="button"
            name="button"
            onClick={() => {
              deleteProductFromCart(item, oneItem);
            }}
          >
            -
          </button>
          <span> {quantity} </span>
          <button
            className="minus-btn"
            type="button"
            name="button"
            onClick={() => {
              addProductToCart(item, oneItem);
            }}
          >
            +
          </button>
        </span>
      </td>
      <td className={styles.total}>${price * quantity}</td>
      <td className={styles.delete}>
        <button
          type="button"
          onClick={() => {
            deleteAllProductsByType(item);
          }}
        >
          ✖
        </button>
      </td>
    </tr>
  );
};
CartItem.propTypes = {
  item: PropTypes.shape(cartItem),
  deleteAllProductsByType: PropTypes.func,
  deleteProductFromCart: PropTypes.func,
  addProductToCart: PropTypes.func,
};
CartItem.defaultProps = {
  item: undefined,
  deleteAllProductsByType: () => {},
  deleteProductFromCart: () => {},
  addProductToCart: () => {},
};
export default CartItem;
