import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getOrder, getOrders, postOrder } from "./cart-async-actions";
import {
  addProduct,
  deleteProduct,
  deleteProductsByType,
  setOrder,
  setOrders,
  setTotalPrice,
} from "./cart-actions";

export const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({
  items: [],
  totalPrice: null,
  orders: {},
  order: {},
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct, (state, action) => {
        const { item, quantity } = action.payload;
        let cartList = [];
        const itemIndex = state.items.findIndex(
          (value) => value.id === item.id
        );
        if (itemIndex < 0) {
          const addedItem = {
            ...item,
            quantity,
          };
          cartList = [...state.items, addedItem];
        } else {
          const addedItem = {
            ...state.items[itemIndex],
            quantity: state.items[itemIndex].quantity + quantity,
          };
          cartList = [...state.items];
          cartList.splice(itemIndex, 1, addedItem);
        }
        return {
          ...state,
          items: cartList,
        };
      })
      .addCase(deleteProductsByType, (state, action) => {
        const { item } = action.payload;
        return {
          ...state,
          items: state.items.filter((i) => i.id !== item.id),
        };
      })
      .addCase(deleteProduct, (state, action) => {
        const { item, quantity } = action.payload;
        let cartList = [];
        const itemIndex = state.items.findIndex(
          (value) => value.id === item.id
        );
        if (state.items[itemIndex].quantity === 1) {
          cartList = [...state.items];
          cartList.splice(itemIndex, 1);
        } else {
          const deletedItem = {
            ...state.items[itemIndex],
            quantity: state.items[itemIndex].quantity - quantity,
          };
          cartList = [...state.items];
          cartList.splice(itemIndex, 1, deletedItem);
        }

        return {
          ...state,
          items: cartList,
        };
      })
      .addCase(setTotalPrice, (state) => {
        const totalPrice = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        return {
          ...state,
          totalPrice,
        };
      })
      .addCase(setOrder, (state, action) => {
        return { ...state, order: action.payload };
      })
      .addCase(setOrders, (state, action) => {
        return { ...state, orders: action.payload };
      })
      .addCase(getOrder.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(getOrder.fulfilled, (state) => {
        return {
          ...state,
          isFetching: false,
          error: null,
        };
      })
      .addCase(getOrder.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(postOrder.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(postOrder.fulfilled, (state) => {
        return {
          ...state,
          items: [],
          totalPrice: null,
          isFetching: false,
          error: null,
        };
      })
      .addCase(postOrder.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      })
      .addCase(getOrders.pending, (state) => {
        return { ...state, isFetching: true, error: null };
      })
      .addCase(getOrders.fulfilled, (state) => {
        return {
          ...state,
          isFetching: false,
          error: null,
        };
      })
      .addCase(getOrders.rejected, (state, action) => {
        const { error } = action;
        return { ...state, isFetching: false, error };
      });
  },
});

export default cartSlice;
