import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { normalize, schema } from "normalizr";
import productsApi from "../../api/products-api";
import productApi from "../../api/product-api";
import {
  setCurrentPage,
  setMaxPrice,
  setMinPrice,
  setOrigins,
  setPerPage,
  setPortionNumber,
  setProduct,
  setProducts,
  setSelectedOrigins,
  setTotalItems,
} from "./products-actions";

export const productsAdapter = createEntityAdapter();
export const item = new schema.Entity("items");
const initialState = productsAdapter.getInitialState({
  products: { entities: {}, result: [] },
  product: {},
  isFetching: true,
  totalItems: 0,
  page: 1,
  perPage: 10,
  portionNumber: 1,
  price: [0, 10000],
  origins: [],
  minPrice: 0,
  maxPrice: 10000,
  selectedOrigins: [],
  error: null,
});

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
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setProducts, (state, action) => {
        state.products = action.payload;
      })
      .addCase(setProduct, (state, action) => {
        state.product = action.payload;
      })
      .addCase(setMaxPrice, (state, action) => {
        return { ...state, maxPrice: action.payload };
      })
      .addCase(setMinPrice, (state, action) => {
        return { ...state, minPrice: action.payload };
      })
      .addCase(setSelectedOrigins, (state, action) => {
        return {
          ...state,
          selectedOrigins: action.payload,
        };
      })
      .addCase(setOrigins, (state, action) => {
        const originsForSelect = [{ label: "All", value: "" }];
        const items = action.payload;
        items.map((el) => {
          return originsForSelect.push({
            label: el.displayName,
            value: el.value,
          });
        });
        return { ...state, origins: originsForSelect };
      })
      .addCase(setPerPage, (state, action) => {
        state.perPage = action.payload;
      })
      .addCase(setCurrentPage, (state, action) => {
        state.page = action.payload;
      })
      .addCase(setPortionNumber, (state, action) => {
        state.portionNumber = action.payload;
      })
      .addCase(setTotalItems, (state, action) => {
        state.totalItems = action.payload;
      })
      .addCase(getItems.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getItems.fulfilled, (state) => {
        state.isFetching = false;
        state.error = null;
      })
      .addCase(getItems.rejected, (state, action) => {
        const { error } = action;
        state.isFetching = false;
        state.error = error;
      })
      .addCase(getProduct.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getProduct.fulfilled, (state) => {
        state.isFetching = false;
        state.error = null;
      })
      .addCase(getProduct.rejected, (state, action) => {
        const { error } = action;
        state.isFetching = false;
        state.error = error;
      })
      .addCase(getProductsOrigins.pending, (state) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(getProductsOrigins.fulfilled, (state) => {
        state.isFetching = false;
        state.error = null;
      })
      .addCase(getProductsOrigins.rejected, (state, action) => {
        const { error } = action;
        state.isFetching = false;
        state.error = error;
      });
  },
});

export default productsSlice;
