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
