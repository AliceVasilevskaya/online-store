import getProduct from "./product-endpoints";

const productApi = {
  getProductItem(productId) {
    return getProduct(productId);
  },
};
export default productApi;
