import { useSelector } from "react-redux";

const OrdersSelectors = function () {
  const order = useSelector((state) => {
    return state.ordersPage.order;
  });
  const orders = useSelector((state) => {
    return state.ordersPage.orders;
  });

  return {
    order,
    orders,
  };
};
export default OrdersSelectors;
