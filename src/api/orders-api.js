import { getOrder, getOrders, postOrder } from "./orders-endpoints";

const ordersApi = {
  postMyOrder(order) {
    return postOrder(order);
  },
  getOrderById(orderId) {
    return getOrder(orderId);
  },
  getMyOrders() {
    return getOrders();
  },
};

export default ordersApi;
