import {
  getOrderActions,
  getOrdersActions,
  postOrderActions,
} from "./orders-actions";
import createApiRequestWatcher from "../../utils/createAPIRequestSaga";

const getOrdersWatcher = createApiRequestWatcher(getOrdersActions);
const getOrderWatcher = createApiRequestWatcher(getOrderActions);
const postOrderWatcher = createApiRequestWatcher(postOrderActions);
export { getOrdersWatcher, getOrderWatcher, postOrderWatcher };
