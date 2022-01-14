import { getProducts, getOrigins } from "./products-endpoints";

const productsApi = {
  getProductsList(page, perPage, origins, minPrice, maxPrice) {
    return getProducts(page, perPage, origins, minPrice, maxPrice);
  },
  getProductsOrigins() {
    return getOrigins();
  },
};
export default productsApi;
