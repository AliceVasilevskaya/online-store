import { createSelector } from "@reduxjs/toolkit";

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
export const getItemsSelector = (state) => {
  return state.productsPage.products;
};
export const getProducts = createSelector(getItemsSelector, (items) => {
  return items.filter(() => true);
});
