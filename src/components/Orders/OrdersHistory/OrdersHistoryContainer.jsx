import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import OrdersHistory from "./OrdersHistory";
import OrdersSelectors from "../../../store/orders/orders-selectors";
import { getOrdersActions } from "../../../store/orders/orders-actions";
import ordersApi from "../../../api/orders-api";

const OrdersHistoryContainer = function () {
  const { orders } = OrdersSelectors();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getOrders());

    // Change logic according to HM#4
    dispatch(
      getOrdersActions.init({
        requestFunction: ordersApi.getMyOrders,
      })
    );
  }, []);

  return (
    <div>
      <OrdersHistory orders={orders} />
    </div>
  );
};

export default OrdersHistoryContainer;
