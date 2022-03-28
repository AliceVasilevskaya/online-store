import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  getOrderActions,
  getOrdersActions,
  postOrderActions,
} from "./orders-actions";

export const ordersAdapter = createEntityAdapter();
const initialState = ordersAdapter.getInitialState({
  orders: {},
  order: {},
});
const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderActions.start, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(getOrderActions.success, (state, action) => {
        return {
          ...state,
          isFetching: false,
          error: null,
          order: action.payload,
        };
      })
      .addCase(getOrderActions.error, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(postOrderActions.start, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(postOrderActions.success, (state) => {
        return {
          ...state,
          items: [],
          totalPrice: null,
          isFetching: false,
          error: null,
        };
      })
      .addCase(postOrderActions.error, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(getOrdersActions.start, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(getOrdersActions.success, (state, action) => {
        return {
          ...state,
          isFetching: false,
          orders: action.payload,
          error: null,
        };
      })
      .addCase(getOrdersActions.error, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      });
  },
});

export default orderSlice;
