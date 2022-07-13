import { put, takeEvery, debounce } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from "../constants";

function* getProductListSaga(action) {
  try {
    const { page, limit, keyword, categoryIds } = action.payload;
    const result = yield axios.get(
      `https://ducanh-server.herokuapp.com/products`,
      {
        params: {
          _expand: ["category"],
          _embed: ["comments", "variants", "productImages", "colors"],
          _page: page,
          _limit: limit,
          categoryId: categoryIds,
          q: keyword,
        },
      }
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        data: result.data,
        meta: {
          page,
          limit,
          total: parseInt(result.headers["x-total-count"]),
        },
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* getProductListUserSaga(action) {
  try {
    const { categoryIds } = action.payload;
    const result = yield axios.get(
      `https://ducanh-server.herokuapp.com/products`,
      {
        params: {
          _expand: "category",
          _embed: ["comments", "variants", "productImages", "colors"],
          categoryId: categoryIds,
        },
      }
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_USER),
      payload: {
        data: result.data,
        meta: {
          total: parseInt(result.headers["x-total-count"]),
        },
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_USER),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* createProductSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post(`https://ducanh-server.herokuapp.com/products`, data);
    yield put({ type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT) });
    yield put({ type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* updateProductSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    yield axios.patch(
      `https://ducanh-server.herokuapp.com/products/${id}`,
      data
    );
    yield put({ type: SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT) });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.UPDATE_PRODUCT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* deleteProductSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`https://ducanh-server.herokuapp.com/products/${id}`);
    yield put({ type: SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT) });
    yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        page: 1,
        limit: 10,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}
function* getProductDetail(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(
      `https://ducanh-server.herokuapp.com/products/${id}`,
      {
        params: {
          _expand: "category",
          _embed: ["comments", "variants", "productImages", "colors"],
        },
      }
    );
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}
export default function* productSaga() {
  yield debounce(
    300,
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
    getProductListSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_USER),
    getProductListUserSaga
  );
  yield takeEvery(REQUEST(PRODUCT_ACTION.CREATE_PRODUCT), createProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT), updateProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.DELETE_PRODUCT), deleteProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL), getProductDetail);
}
