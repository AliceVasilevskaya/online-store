import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  getItems,
  getProductsOrigins,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} from "./products-async-actions";
import {
  setCurrentPage,
  setIsEditable,
  setOrigins,
  setPerPage,
  setProduct,
  setProducts,
  setTotalItems,
} from "./products-actions";

export const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  products: { entities: {}, result: [] },
  item: {},
  isFetching: true,
  totalItems: 0,
  page: 1,
  perPage: 10,
  portionNumber: 1,
  price: [0, 1000000000],
  origins: [],
  minPrice: 0,
  maxPrice: 1000000000,
  selectedOrigins: [],
  error: null,
  isEditable: null,
  openEdit: false,
  openAdd: false,
  values: {},
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPortionNumber: (state, action) => {
      return { ...state, portionNumber: action.payload };
    },
    setSelectedOrigins: (state, action) => {
      return {
        ...state,
        selectedOrigins: action.payload,
      };
    },
    setMaxPrice: (state, action) => {
      return { ...state, maxPrice: action.payload };
    },
    setMinPrice: (state, action) => {
      return { ...state, minPrice: action.payload };
    },
    setOpen: (state, action) => {
      return {
        ...state,
        openEdit: action.payload[0],
        openAdd: action.payload[1],
      };
    },
    setValues: (state, action) => {
      return { ...state, values: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setIsEditable, (state, action) => {
        return { ...state, isEditable: action.payload };
      })
      .addCase(setProducts, (state, action) => {
        return { ...state, products: action.payload };
      })
      .addCase(setProduct, (state, action) => {
        return { ...state, product: action.payload };
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
        return { ...state, perPage: action.payload };
      })
      .addCase(setCurrentPage, (state, action) => {
        return { ...state, page: action.payload };
      })
      .addCase(setTotalItems, (state, action) => {
        return { ...state, totalItems: action.payload };
      })
      .addCase(getItems.pending, (state) => {
        return {
          ...state,
          isFetching: true,
          error: null,
        };
      })
      .addCase(getItems.fulfilled, (state) => {
        return {
          ...state,
          isFetching: false,
          error: null,
        };
      })
      .addCase(getItems.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(getProduct.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(getProduct.fulfilled, (state) => {
        return { ...state, isFetching: false, error: null };
      })
      .addCase(getProduct.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(getProductsOrigins.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(getProductsOrigins.fulfilled, (state) => {
        return { ...state, isFetching: false, error: null };
      })
      .addCase(getProductsOrigins.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(addProduct.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(addProduct.fulfilled, (state) => {
        return {
          ...state,
          isFetching: false,
          error: null,
          openAdd: false,
        };
      })
      .addCase(addProduct.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(editProduct.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(editProduct.fulfilled, (state) => {
        return {
          ...state,
          isFetching: false,
          error: null,
          openEdit: false,
        };
      })
      .addCase(editProduct.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(deleteProduct.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        return {
          ...state,
          isFetching: false,
          error: null,
        };
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      });
  },
});
export const {
  setValues,
  setPortionNumber,
  setSelectedOrigins,
  setMinPrice,
  setMaxPrice,
  setOpen,
} = productsSlice.actions;

export default productsSlice;
