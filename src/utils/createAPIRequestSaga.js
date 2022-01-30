import { takeLatest, put, call } from "redux-saga/effects";

function createApiRequestWorker(actions) {
  return function* worker({ payload }) {
    const { start, success, error } = actions;
    yield put(start());
    try {
      const data = yield call(payload.requestFunction, payload.params);
      yield put(success(data));
    } catch (e) {
      yield put(error(e));
    }
  };
}

export default function createApiRequestWatcher(actions) {
  const { init } = actions;
  return function* watcher() {
    yield takeLatest(init, createApiRequestWorker(actions));
  };
}
