import ROUTES from "../routes/pathsOfRoutes";
import httpClient from "./api";

const getProducts = () => {
  return httpClient.get(`${ROUTES.PRODUCTS}`).then((response) => response.data);
};

export default getProducts;
