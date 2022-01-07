import ROUTES from "../routes/pathsOfRoutes";
import httpClient from "./api";

const getProducts = (
  page = 1,
  perPage = 10,
  origins = "",
  minPrice = 0,
  maxPrice = 10000
) => {
  return httpClient
    .get(
      `${ROUTES.PRODUCTS}?page=${page}&perPage=${perPage}&origins=${origins}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
    .then((response) => response.data);
};
const getOrigins = () => {
  return httpClient
    .get(ROUTES.PRODUCTS_ORIGINS)
    .then((response) => response.data);
};
export { getProducts, getOrigins };
