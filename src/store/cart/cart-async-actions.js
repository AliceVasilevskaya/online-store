import {
  addProduct,
  deleteProduct,
  deleteProductsByType,
  setTotalPrice,
} from "./cart-actions";

export const addProductToCart = (item, quantity) => (dispatch) => {
  try {
    dispatch(addProduct({ item, quantity }));
    dispatch(setTotalPrice());
  } catch (e) {
    throw new Error(e.message);
  }
};
export const deleteProductFromCart = (item, quantity) => (dispatch) => {
  try {
    dispatch(deleteProduct({ item, quantity }));
    dispatch(setTotalPrice());
  } catch (e) {
    throw new Error(e.message);
  }
};
export const deleteAllProductsByType = (item) => (dispatch) => {
  try {
    dispatch(deleteProductsByType({ item }));
    dispatch(setTotalPrice());
  } catch (e) {
    throw new Error(e.message);
  }
};
// Change logic according to HM#4

// export const getOrders = createAsyncThunk(
//   "orders/getOrders",
//   async (_, { dispatch }) => {
//     const data = await ordersApi.getMyOrders();
//     dispatch(setOrders(data));
//   }
// );
// export const getOrder = createAsyncThunk(
//   "orders/getOrder",
//   async ({ orderId }, { dispatch }) => {
//     const data = await ordersApi.getOrderById(orderId);
//     dispatch(setOrder(data));
//   }
// );
// export const postOrder = createAsyncThunk(
//   "orders/postOrder",
//   async ({ order }) => {
//     await ordersApi.postMyOrder(order);
//   }
// );
