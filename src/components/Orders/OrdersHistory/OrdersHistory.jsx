import React from "react";
import PropTypes from "prop-types";
import OrderItem from "../OrderItem/OrderItem";

const OrdersHistory = function ({ orders }) {
  return (
    <div>
      {!orders.items ? (
        <p>Your order history is empty</p>
      ) : (
        <div>
          {orders.items &&
            orders.items
              .map((el) => {
                return <OrderItem order={el} key={el.id} />;
              })
              .reverse()}
        </div>
      )}
    </div>
  );
};
const ordersPropType = {
  items: PropTypes.array,
};
OrdersHistory.propTypes = {
  orders: PropTypes.shape(ordersPropType),
};
OrdersHistory.defaultProps = {
  orders: {},
};
export default OrdersHistory;
