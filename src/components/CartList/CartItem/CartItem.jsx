import { Link } from "react-router-dom";
import React from "react";
import * as PropTypes from "prop-types";
import styles from "../Cart.module.css";

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
        <Link to={`/products/${id}`}>{name}</Link>
      </td>
      <td>{`$${price}`}</td>
      <td>
        <span>
          <button
            className="plus-btn"
            type="button"
            name="button"
            onClick={() => {
              deleteProductFromCart(item, 1);
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
              addProductToCart(item, 1);
            }}
          >
            +
          </button>
        </span>
      </td>
      <td className={styles.total}>${price * quantity}</td>
      <td>
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
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
  deleteAllProductsByType: PropTypes.func,
  deleteProductFromCart: PropTypes.func,
  addProductToCart: PropTypes.func,
};
CartItem.defaultProps = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
  deleteAllProductsByType: PropTypes.func,
  deleteProductFromCart: PropTypes.func,
  addProductToCart: PropTypes.func,
};
export default CartItem;
