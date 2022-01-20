import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import OrdersHistory from "./OrdersHistory";
import CartSelectors from "../../../store/cart/cart-selectors";
import { getOrders } from "../../../store/cart/cart-async-actions";

const OrdersHistoryContainer = function () {
  const { orders } = CartSelectors();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div>
      <OrdersHistory orders={orders} />
    </div>
  );
};

export default OrdersHistoryContainer;
