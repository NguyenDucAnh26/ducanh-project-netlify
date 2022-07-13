import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, CATEGORY_ACTION } from "../constants";

function* getCategoryListSaga(action) {
  try {
    const result = yield axios.get(
      `https://ducanh-server.herokuapp.com/categories`
    );
    yield put({
      type: SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* createCategorySaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post(`https://ducanh-server.herokuapp.com/categories`, data);
    yield put({ type: SUCCESS(CATEGORY_ACTION.CREATE_CATEGORY) });
    yield put({ type: REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.CREATE_CATEGORY),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* updateCategorySaga(action) {
  try {
    const { id, data } = action.payload;
    yield axios.patch(
      `https://ducanh-server.herokuapp.com/categories/${id}`,
      data
    );
    yield put({ type: SUCCESS(CATEGORY_ACTION.UPDATE_CATEGORY) });
    yield put({ type: REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.UPDATE_CATEGORY),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* deleteCategorySaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`https://ducanh-server.herokuapp.com/categories/${id}`);
    yield put({ type: SUCCESS(CATEGORY_ACTION.DELETE_CATEGORY) });
    yield put({ type: REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.DELETE_CATEGORY),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

export default function* productSaga() {
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST),
    getCategoryListSaga
  );
  yield takeEvery(REQUEST(CATEGORY_ACTION.CREATE_CATEGORY), createCategorySaga);
  yield takeEvery(REQUEST(CATEGORY_ACTION.UPDATE_CATEGORY), updateCategorySaga);
  yield takeEvery(REQUEST(CATEGORY_ACTION.DELETE_CATEGORY), deleteCategorySaga);
}
