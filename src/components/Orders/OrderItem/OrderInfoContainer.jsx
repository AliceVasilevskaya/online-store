import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import OrderItem from "./OrderItem";
import OrdersSelectors from "../../../store/orders/orders-selectors";
import { getOrderActions } from "../../../store/orders/orders-actions";
import ordersApi from "../../../api/orders-api";

const OrderInfoContainer = function () {
  const dispatch = useDispatch();
  const params = useParams();
  const { orderId } = params;
  const { order } = OrdersSelectors();
  useEffect(() => {
    // dispatch(getOrder({ orderId }));

    // Change logic according to HM#4
    dispatch(
      getOrderActions.init({
        requestFunction: ordersApi.getOrderById,
        params: orderId,
      })
    );
  }, []);
  return <div>{order.pieces && <OrderItem order={order} />} </div>;
};

export default OrderInfoContainer;
