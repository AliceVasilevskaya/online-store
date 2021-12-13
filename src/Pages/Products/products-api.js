import instance from "../../common/api/api";

const productsApi = {
  getProductsList() {
    return instance.get(`products`).then((response) => response.data);
  },
};
export default productsApi;
