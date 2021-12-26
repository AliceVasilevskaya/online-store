import thunkMiddleWare from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { applyMiddleware, combineReducers, createStore } from "redux";
import { productsReducer } from "../context/products/products-reducer";
import cartReducer from "../context/cart/cart-reducer";

const rootReducer = combineReducers({
  productsPage: productsReducer,
  cartPage: cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;
