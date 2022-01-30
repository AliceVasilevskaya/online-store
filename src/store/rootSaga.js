import { all } from "redux-saga/effects";
import {
  getOrdersWatcher,
  getOrderWatcher,
  postOrderWatcher,
} from "./orders/orders-saga";

export default function* rootSaga() {
  yield all([getOrdersWatcher(), getOrderWatcher(), postOrderWatcher()]);
}
