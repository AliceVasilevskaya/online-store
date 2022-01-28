import { createAction } from "@reduxjs/toolkit";

const SET_CURRENT_PAGE = "ONLINE-STORE/PRODUCTS_PAGE/SET_CURRENT_PAGE";
const SET_PER_PAGE = "ONLINE-STORE/PRODUCTS_PAGE/SET_PER_PAGE";
const SET_PRODUCTS = "ONLINE-STORE/PRODUCTS_PAGE/SET_PRODUCTS";
const SET_PRODUCT = "ONLINE-STORE/PRODUCTS_PAGE/SET_PRODUCT";
const SET_TOTAL_ITEMS = "ONLINE-STORE/PRODUCTS_PAGE/SET_TOTAL_ITEMS";
const SET_ORIGINS = "ONLINE-STORE/PRODUCTS_PAGE/SET_ORIGINS";
const SET_IS_EDITABLE = "SET_IS_EDITABLE";

const setCurrentPage = createAction(SET_CURRENT_PAGE);
const setPerPage = createAction(SET_PER_PAGE);
const setProducts = createAction(SET_PRODUCTS);
const setProduct = createAction(SET_PRODUCT);
const setTotalItems = createAction(SET_TOTAL_ITEMS);
const setOrigins = createAction(SET_ORIGINS);
const setIsEditable = createAction(SET_IS_EDITABLE);

export {
  setIsEditable,
  setCurrentPage,
  setPerPage,
  setProducts,
  setProduct,
  setTotalItems,
  setOrigins,
};
