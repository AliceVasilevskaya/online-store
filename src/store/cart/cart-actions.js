import { createAction } from "@reduxjs/toolkit";

// Change logic according to HM#4

// const SET_ORDER = "SET_ORDER";
// const SET_ORDERS = "SET_ORDERS";
const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const DELETE_PRODUCT_BY_TYPE = "DELETE_PRODUCT_BY_TYPE";

// const setOrders = createAction(SET_ORDERS);
// const setOrder = createAction(SET_ORDER);
const addProduct = createAction(ADD_PRODUCT);
const deleteProduct = createAction(DELETE_PRODUCT);
const setTotalPrice = createAction(SET_TOTAL_PRICE);
const deleteProductsByType = createAction(DELETE_PRODUCT_BY_TYPE);

export {
  // setOrder,
  // setOrders,
  addProduct,
  deleteProductsByType,
  deleteProduct,
  setTotalPrice,
};
