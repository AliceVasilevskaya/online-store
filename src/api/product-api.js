import instance from "./api";

const productApi = {
  getProductItem(productId) {
    return instance
      .get(`products/${productId}`)
      .then((response) => response.data);
  },
};
export default productApi;
