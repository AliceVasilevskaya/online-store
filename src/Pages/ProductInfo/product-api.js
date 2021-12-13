import instance from "../../common/api/api";

const productApi = {
  getProductItem(productId) {
    return instance
      .get(`products/${productId}`)
      .then((response) => response.data);
  },
};
export default productApi;
