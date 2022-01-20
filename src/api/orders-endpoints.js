import httpClient from "./api";
import ROUTES from "../routes/pathsOfRoutes";

const getOrders = () => {
  return httpClient.get(ROUTES.ORDERS).then((response) => response.data);
};
const postOrder = (order) => {
  return httpClient
    .post(ROUTES.ORDERS, order)
    .then((response) => response.data);
};
const getOrder = (orderId) => {
  return httpClient
    .get(`${ROUTES.ORDERS}/${orderId}`)
    .then((response) => response.data);
};
export { postOrder, getOrders, getOrder };
