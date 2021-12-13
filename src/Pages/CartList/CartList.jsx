import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const CartList = function ({ totalPrice, cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className={styles.cartContent}>
        {!cartItems.length ? (
          <p>Your Cart is empty</p>
        ) : (
          <div className={styles.cartMain}>
            <table className={styles.cartTable}>
              <thead>
                <tr>
                  <th> </th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <tr>
                  <th colSpan="3">Subtotal</th>
                  <th>${totalPrice}</th>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartList;
