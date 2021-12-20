import httpClient from "./api";
import ROUTES from "../routes/pathsOfRoutes";

const getProduct = (productId) => {
  return httpClient
    .get(`${ROUTES.PRODUCTS}/${productId}`)
    .then((response) => response.data);
};
export default getProduct;
