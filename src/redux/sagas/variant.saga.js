import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, VARIANT_ACTION } from "../constants";

function* getVariantListSaga(action) {
  try {
    const result = yield axios.get(
      `https://ducanh-server.herokuapp.com/variants`
    );
    yield put({
      type: SUCCESS(VARIANT_ACTION.GET_VARIANT_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(VARIANT_ACTION.GET_VARIANT_LIST),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* createVariantSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post(`https://ducanh-server.herokuapp.com/variants`, data);
    yield put({ type: SUCCESS(VARIANT_ACTION.CREATE_VARIANT) });
    yield put({ type: REQUEST(VARIANT_ACTION.GET_VARIANT_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(VARIANT_ACTION.CREATE_VARIANT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* updateVariantSaga(action) {
  try {
    const { id, data } = action.payload;
    yield axios.patch(
      `https://ducanh-server.herokuapp.com/variants/${id}`,
      data
    );
    yield put({ type: SUCCESS(VARIANT_ACTION.UPDATE_VARIANT) });
    yield put({ type: REQUEST(VARIANT_ACTION.GET_VARIANT_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(VARIANT_ACTION.UPDATE_VARIANT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* deleteVariantSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`https://ducanh-server.herokuapp.com/variants/${id}`);
    yield put({ type: SUCCESS(VARIANT_ACTION.DELETE_VARIANT) });
    yield put({ type: REQUEST(VARIANT_ACTION.GET_VARIANT_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(VARIANT_ACTION.DELETE_VARIANT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

export default function* variantSaga() {
  yield takeEvery(REQUEST(VARIANT_ACTION.GET_VARIANT_LIST), getVariantListSaga);
  yield takeEvery(REQUEST(VARIANT_ACTION.CREATE_VARIANT), createVariantSaga);
  yield takeEvery(REQUEST(VARIANT_ACTION.UPDATE_VARIANT), updateVariantSaga);
  yield takeEvery(REQUEST(VARIANT_ACTION.DELETE_VARIANT), deleteVariantSaga);
}
