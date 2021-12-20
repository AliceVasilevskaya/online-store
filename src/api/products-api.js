import getProducts from "./products-endpoints";

const productsApi = {
  getProductsList() {
    return getProducts();
  },
};
export default productsApi;
