import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import styles from "./OrderItem.module.css";
import ROUTES from "../../../routes/pathsOfRoutes";
import { productItem } from "../../../utils/constants";

const OrderItem = function ({ order }) {
  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderLink}>
        <Link to={`${ROUTES.ORDERS}/${order.id}`}>
          {moment(order.createdAt).format("MMMM Do YYYY")}
        </Link>
      </div>
      <div className={styles.orderContent}>
        <table className={styles.orderTable}>
          <thead>
            <tr>
              <th> </th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.pieces.map((el) => (
              <tr className={styles.product} key={el.id}>
                <td className={styles.productName}>
                  <Link to={`${ROUTES.PRODUCTS}/${el.product.id}`}>
                    {el.product.name}
                  </Link>
                </td>
                <td>{`$${el.product.price}`}</td>
                <td className={styles.quantity}>{el.count}</td>
                <td className={styles.total}>${el.product.price * el.count}</td>
              </tr>
            ))}
            <tr>
              <th colSpan="3">Subtotal</th>
              <th>
                $
                {order.pieces.reduce(
                  (sum, item) => sum + item.product.price * item.count,
                  0
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
const orderItemType = PropTypes.shape(productItem);
OrderItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string,
    pieces: PropTypes.arrayOf(orderItemType),
    createdAt: PropTypes.string,
  }),
};
OrderItem.defaultProps = {
  order: {},
};
export default OrderItem;
