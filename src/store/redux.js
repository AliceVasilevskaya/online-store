import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/products-slice";
import cartReducer from "./cart/cart-slice";

const store = configureStore({
  reducer: {
    productsPage: productsReducer.reducer,
    cartPage: cartReducer.reducer,
  },
});

export default store;
