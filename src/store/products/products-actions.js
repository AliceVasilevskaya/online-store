import { createAction } from "@reduxjs/toolkit";

const SET_PORTION_NUMBER = "ONLINE-STORE/PRODUCTS_PAGE/SET_PORTION_NUMBER";
const SET_CURRENT_PAGE = "ONLINE-STORE/PRODUCTS_PAGE/SET_CURRENT_PAGE";
const SET_PER_PAGE = "ONLINE-STORE/PRODUCTS_PAGE/SET_PER_PAGE";
const SET_PRODUCTS = "ONLINE-STORE/PRODUCTS_PAGE/SET_PRODUCTS";
const SET_PRODUCT = "ONLINE-STORE/PRODUCTS_PAGE/SET_PRODUCT";
const SET_TOTAL_ITEMS = "ONLINE-STORE/PRODUCTS_PAGE/SET_TOTAL_ITEMS";
const SET_ORIGINS = "ONLINE-STORE/PRODUCTS_PAGE/SET_ORIGINS";
const SET_SELECTED_ORIGINS = "ONLINE-STORE/PRODUCTS_PAGE/SET_SELECTED_ORIGINS";
const SET_MIN_PRICE = "ONLINE-STORE/PRODUCTS_PAGE/SET_MIN_PRICE";
const SET_MAX_PRICE = "ONLINE-STORE/PRODUCTS_PAGE/SET_MAX_PRICE";

const setPortionNumber = createAction(SET_PORTION_NUMBER);
const setCurrentPage = createAction(SET_CURRENT_PAGE);
const setPerPage = createAction(SET_PER_PAGE);
const setProducts = createAction(SET_PRODUCTS);
const setProduct = createAction(SET_PRODUCT);
const setTotalItems = createAction(SET_TOTAL_ITEMS);
const setOrigins = createAction(SET_ORIGINS);
const setSelectedOrigins = createAction(SET_SELECTED_ORIGINS);
const setMinPrice = createAction(SET_MIN_PRICE);
const setMaxPrice = createAction(SET_MAX_PRICE);

export {
  setPortionNumber,
  setCurrentPage,
  setPerPage,
  setProducts,
  setProduct,
  setTotalItems,
  setOrigins,
  setSelectedOrigins,
  setMinPrice,
  setMaxPrice,
};
