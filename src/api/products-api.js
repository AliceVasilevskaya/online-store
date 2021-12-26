import getProducts from "./products-endpoints";

const productsApi = {
  getProductsList(page, perPage) {
    return getProducts(page, perPage);
  },
};
export default productsApi;
