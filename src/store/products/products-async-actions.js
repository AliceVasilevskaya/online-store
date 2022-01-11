import { createAsyncThunk } from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import productsApi from "../../api/products-api";
import productApi from "../../api/product-api";
import {
  setCurrentPage,
  setOrigins,
  setPerPage,
  setProduct,
  setProducts,
  setTotalItems,
} from "./products-actions";

export const item = new schema.Entity("items");
export const getItems = createAsyncThunk(
  "products/getProducts",
  async ({ page, perPage }, { dispatch, getState }) => {
    const origins = [];
    const { productsPage } = getState();
    productsPage.selectedOrigins.map((el) => {
      return origins.push(el.value);
    });
    dispatch(setCurrentPage(page));
    dispatch(setPerPage(perPage));
    const data = await productsApi.getProductsList(
      page,
      perPage,
      origins.join(),
      productsPage.minPrice,
      productsPage.maxPrice
    );
    const normalizedProducts = normalize(data.items, [item]);
    dispatch(setProducts(normalizedProducts));
    dispatch(setTotalItems(data.totalItems));
  }
);
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async ({ productId }, { dispatch }) => {
    const data = await productApi.getProductItem(productId);
    dispatch(setProduct(data));
  }
);
export const getProductsOrigins = createAsyncThunk(
  "products/getOrigins",
  async (_, { dispatch }) => {
    const data = await productsApi.getProductsOrigins();
    dispatch(setOrigins(data.items));
  }
);