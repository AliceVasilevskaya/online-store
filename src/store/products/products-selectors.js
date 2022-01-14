import { createSelector } from "@reduxjs/toolkit";
import { denormalize } from "normalizr";
import { useSelector } from "react-redux";
import { item } from "./products-async-actions";

const ProductsSelectors = function () {
  const getItemsSelector = (state) => {
    return denormalize(
      state.productsPage.products.result,
      [item],
      state.productsPage.products.entities
    );
  };
  const error = useSelector((state) => {
    return state.productsPage.error;
  });
  const items = useSelector(
    createSelector(getItemsSelector, (products) => products)
  );
  const product = useSelector((state) => {
    return state.productsPage.product;
  });
  const totalItems = useSelector((state) => {
    return state.productsPage.totalItems;
  });
  const perPage = useSelector((state) => {
    return state.productsPage.perPage;
  });
  const page = useSelector((state) => {
    return state.productsPage.page;
  });
  const isFetching = useSelector((state) => {
    return state.productsPage.isFetching;
  });
  const portionNumber = useSelector((state) => {
    return state.productsPage.portionNumber;
  });
  const selectedOrigins = useSelector((state) => {
    return state.productsPage.selectedOrigins;
  });
  const minPrice = useSelector((state) => {
    return state.productsPage.minPrice;
  });
  const maxPrice = useSelector((state) => {
    return state.productsPage.maxPrice;
  });
  const origins = useSelector((state) => {
    return state.productsPage.origins;
  });
  return {
    error,
    product,
    origins,
    maxPrice,
    minPrice,
    selectedOrigins,
    totalItems,
    perPage,
    page,
    items,
    isFetching,
    portionNumber,
  };
};
export default ProductsSelectors;
