import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, PRODUCT_IMAGES_ACTION } from "../constants";

function* getProductImagesListSaga(action) {
  try {
    const result = yield axios.get(
      `https://ducanh-server.herokuapp.com/productImages`
    );
    yield put({
      type: SUCCESS(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* createProductImagesSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post(`https://ducanh-server.herokuapp.com/productImages`, data);
    yield put({ type: SUCCESS(PRODUCT_IMAGES_ACTION.CREATE_PRODUCT_IMAGES) });
    yield put({ type: REQUEST(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_IMAGES_ACTION.CREATE_PRODUCT_IMAGES),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* updateProductImagesSaga(action) {
  try {
    const { id, data } = action.payload;
    yield axios.patch(
      `https://ducanh-server.herokuapp.com/productImages/${id}`,
      data
    );
    yield put({ type: SUCCESS(PRODUCT_IMAGES_ACTION.UPDATE_PRODUCT_IMAGES) });
    yield put({ type: REQUEST(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_IMAGES_ACTION.UPDATE_PRODUCT_IMAGES),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* deleteProductImagesSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(
      `https://ducanh-server.herokuapp.com/productImages/${id}`
    );
    yield put({ type: SUCCESS(PRODUCT_IMAGES_ACTION.DELETE_PRODUCT_IMAGES) });
    yield put({ type: REQUEST(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_IMAGES_ACTION.DELETE_PRODUCT_IMAGES),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

export default function* productImagesSaga() {
  yield takeEvery(
    REQUEST(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST),
    getProductImagesListSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_IMAGES_ACTION.CREATE_PRODUCT_IMAGES),
    createProductImagesSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_IMAGES_ACTION.UPDATE_PRODUCT_IMAGES),
    updateProductImagesSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_IMAGES_ACTION.DELETE_PRODUCT_IMAGES),
    deleteProductImagesSaga
  );
}
