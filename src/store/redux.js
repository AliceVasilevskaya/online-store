import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./products/products-slice";
import cartReducer from "./cart/cart-slice";
import rootSaga from "./rootSaga";
import ordersReducer from "./orders/orders-slice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    productsPage: productsReducer.reducer,
    cartPage: cartReducer.reducer,
    ordersPage: ordersReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }, { thunk: true }).concat(
      sagaMiddleware
    ),
});

require("dotenv").config();

sagaMiddleware.run(rootSaga);
export default store;
