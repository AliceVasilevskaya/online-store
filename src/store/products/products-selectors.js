import { createSelector } from "@reduxjs/toolkit";
import { denormalize } from "normalizr";
import { item } from "./products-slice";

export const getItemsSelector = (state) => {
  return denormalize(
    state.productsPage.products.result,
    [item],
    state.productsPage.products.entities
  );
};
export const getProducts = createSelector(getItemsSelector, (items) => items);
export const getIsFetching = (state) => {
  return state.productsPage.isFetching;
};
export const getPortionNumber = (state) => {
  return state.productsPage.portionNumber;
};
export const getTotalItems = (state) => {
  return state.productsPage.totalItems;
};
export const getPageSize = (state) => {
  return state.productsPage.perPage;
};
export const getCurrentPage = (state) => {
  return state.productsPage.page;
};
export const getProductSelector = (state) => {
  return state.productsPage.product;
};
export const getOrigins = (state) => {
  return state.productsPage.origins;
};
export const getMinPrice = (state) => {
  return state.productsPage.minPrice;
};
export const getMaxPrice = (state) => {
  return state.productsPage.maxPrice;
};
export const getSelectedOrigins = (state) => {
  return state.productsPage.selectedOrigins;
};
