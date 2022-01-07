import { createAction } from "@reduxjs/toolkit";

const DELETE_PRODUCTS_BY_TYPE =
  "ONLINE-STORE/PRODUCTS_PAGE/DELETE_PRODUCTS_BY_TYPE";
const DELETE_PRODUCT = "ONLINE-STORE/PRODUCTS_PAGE/DELETE_PRODUCT";
const ADD_PRODUCT = "ONLINE-STORE/PRODUCTS_PAGE/ADD_PRODUCT";
const SET_TOTAL_PRICE = "ONLINE-STORE/PRODUCTS_PAGE/SET_TOTAL_PRICE";

const deleteProductsByType = createAction(DELETE_PRODUCTS_BY_TYPE);
const deleteProduct = createAction(DELETE_PRODUCT);
const addProduct = createAction(ADD_PRODUCT);
const setTotalPrice = createAction(SET_TOTAL_PRICE);

export { setTotalPrice, addProduct, deleteProduct, deleteProductsByType };
