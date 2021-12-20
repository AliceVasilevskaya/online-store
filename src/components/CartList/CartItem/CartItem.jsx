import { Link } from "react-router-dom";
import React from "react";
import styles from "../Cart.module.css";

const CartItem = function ({ item }) {
  const { id, name, price, quantity } = item;
  return (
    <tr className={styles.product}>
      <td className={styles.productName}>
        <Link to={`/products/${id}`}>{name}</Link>
      </td>
      <td>{`$${price}`}</td>
      <td>
        <span>{quantity}</span>
      </td>
      <td className={styles.total}>${price * quantity}</td>
    </tr>
  );
};
export default CartItem;
