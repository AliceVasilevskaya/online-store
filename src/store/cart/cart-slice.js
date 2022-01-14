import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({
  items: [],
  totalPrice: null,
  filter: null,
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { item, quantity } = action.payload;
      let cartList = [];
      const itemIndex = state.items.findIndex((value) => value.id === item.id);
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
    },
    deleteProductsByType: (state, action) => {
      const { item } = action.payload;
      return {
        ...state,
        items: state.items.filter((i) => i.id !== item.id),
      };
    },
    deleteProduct: (state, action) => {
      const { item, quantity } = action.payload;
      let cartList = [];
      const itemIndex = state.items.findIndex((value) => value.id === item.id);
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
    },
    setTotalPrice: (state) => {
      const totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return {
        ...state,
        totalPrice,
      };
    },
  },
});
export const {
  addProduct,
  deleteProduct,
  deleteProductsByType,
  setTotalPrice,
} = cartSlice.actions;
export default cartSlice;
