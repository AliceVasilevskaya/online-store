import React from "react";
import * as PropTypes from "prop-types";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import { cartItem } from "../../utils/constants";

const CartList = function ({
  totalPrice,
  cartItems,
  addProductToCart,
  deleteProductFromCart,
  deleteAllProductsByType,
}) {
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
                  <CartItem
                    key={item.id}
                    item={item}
                    addProductToCart={addProductToCart}
                    deleteProductFromCart={deleteProductFromCart}
                    deleteAllProductsByType={deleteAllProductsByType}
                  />
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
const CartPropType = PropTypes.shape(cartItem);
CartList.propTypes = {
  cartItems: PropTypes.arrayOf(CartPropType),
  totalPrice: PropTypes.number,
  deleteAllProductsByType: PropTypes.func,
  deleteProductFromCart: PropTypes.func,
  addProductToCart: PropTypes.func,
};
CartList.defaultProps = {
  cartItems: [],
  totalPrice: 0,
  deleteAllProductsByType: () => {},
  deleteProductFromCart: () => {},
  addProductToCart: () => {},
};

export default CartList;
