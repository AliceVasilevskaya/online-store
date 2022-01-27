import { createSelector } from "@reduxjs/toolkit";
import { denormalize, schema } from "normalizr";
import { useSelector } from "react-redux";

const i = new schema.Entity("items");
const ProductsSelectors = function () {
  const getItemsSelector = (state) => {
    return denormalize(
      state.productsPage.products.result,
      [i],
      state.productsPage.products.entities
    );
  };
  const error = useSelector((state) => {
    return state.productsPage.error;
  });
  const openAdd = useSelector((state) => {
    return state.productsPage.openAdd;
  });
  const openEdit = useSelector((state) => {
    return state.productsPage.openEdit;
  });
  const isEditable = useSelector((state) => {
    return state.productsPage.isEditable;
  });
  const items = useSelector(
    createSelector(getItemsSelector, (products) => products)
  );
  const item = useSelector((state) => {
    return state.productsPage.product;
  });
  const totalItems = useSelector((state) => {
    return state.productsPage.totalItems;
  });
  const perPage = useSelector((state) => {
    return state.productsPage.perPage;
  });
  const currentPage = useSelector((state) => {
    return state.productsPage.page;
  });
  const values = useSelector((state) => {
    return state.productsPage.values;
  });
  const isFetching = useSelector((state) => {
    return state.productsPage.isFetching;
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
    isEditable,
    values,
    error,
    item,
    origins,
    maxPrice,
    minPrice,
    selectedOrigins,
    totalItems,
    perPage,
    currentPage,
    items,
    isFetching,
    openAdd,
    openEdit,
  };
};
export default ProductsSelectors;
