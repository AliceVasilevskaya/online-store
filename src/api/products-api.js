import {
  getProducts,
  getOrigins,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./products-endpoints";

const productsApi = {
  getProductsList(page, perPage, origins, minPrice, maxPrice, isEditable) {
    return getProducts(page, perPage, origins, minPrice, maxPrice, isEditable);
  },
  getProductsOrigins() {
    return getOrigins();
  },
  addNewProduct(product) {
    return addProduct(product);
  },
  updateMyProduct(product, productId) {
    return updateProduct(product, productId);
  },
  deleteMyProduct(productId) {
    return deleteProduct(productId);
  },
};
export default productsApi;
