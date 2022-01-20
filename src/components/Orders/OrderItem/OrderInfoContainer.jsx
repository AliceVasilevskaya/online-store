import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getOrder } from "../../../store/cart/cart-async-actions";
import CartSelectors from "../../../store/cart/cart-selectors";
import OrderItem from "./OrderItem";

const OrderInfoContainer = function () {
  const dispatch = useDispatch();
  const params = useParams();
  const { orderId } = params;
  const { order } = CartSelectors();
  useEffect(() => {
    dispatch(getOrder({ orderId }));
  }, []);
  return <div>{order.pieces && <OrderItem order={order} />} </div>;
};

export default OrderInfoContainer;
