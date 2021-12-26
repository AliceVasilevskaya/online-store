import ROUTES from "../routes/pathsOfRoutes";
import httpClient from "./api";

const getProducts = (page = 1, perPage = 5) => {
  return httpClient
    .get(`${ROUTES.PRODUCTS}?page=${page}&perPage=${perPage}`)
    .then((response) => response.data);
};

export default getProducts;
