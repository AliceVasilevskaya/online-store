import ROUTES from "../routes/pathsOfRoutes";
import httpClient from "./api";

const getProducts = (
  page = 1,
  perPage = 10,
  origins = "",
  minPrice = 0,
  maxPrice = 10000,
  isEditable = false
) => {
  return httpClient
    .get(ROUTES.PRODUCTS, {
      params: {
        page,
        perPage,
        origins,
        minPrice,
        maxPrice,
        editable: isEditable,
      },
    })
    .then((response) => response.data);
};
const getOrigins = () => {
  return httpClient
    .get(ROUTES.PRODUCTS_ORIGINS)
    .then((response) => response.data);
};
const addProduct = (product) => {
  return httpClient
    .post(ROUTES.PRODUCTS, product)
    .then((response) => response.data);
};
const updateProduct = (product, productId) => {
  return httpClient
    .patch(`${ROUTES.PRODUCTS}/${productId}`, product)
    .then((response) => response.data);
};
const deleteProduct = (productId) => {
  return httpClient
    .delete(`${ROUTES.PRODUCTS}/${productId}`)
    .then((response) => response.data);
};

export { getProducts, getOrigins, addProduct, updateProduct, deleteProduct };
