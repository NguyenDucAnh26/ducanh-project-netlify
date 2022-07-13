import { put, takeEvery, debounce } from "redux-saga/effects";
import axios from "axios";
import { REQUEST, SUCCESS, FAIL, COLOR_ACTION } from "../constants";

function* getColorListSaga(action) {
  try {
    const {
      keyword,
      categoryIds,
      limit,
      more,
      page,
      sortOrder,
    } = action.payload;

    const result = yield axios.get(
      `https://ducanh-server.herokuapp.com/colors`,
      {
        params: {
          _expand: ["product", "category"],
          _limit: limit,
          _page: page,
          categoryId: categoryIds,
          q: keyword,
          ...(sortOrder && {
            _sort: "productPrice",
            _order: sortOrder,
          }),
        },
      }
    );
    yield put({
      type: SUCCESS(COLOR_ACTION.GET_COLOR_LIST),
      payload: {
        data: result.data,
        meta: {
          page,
          limit,
          total: parseInt(result.headers["x-total-count"]),
        },
        more: more,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(COLOR_ACTION.GET_COLOR_LIST),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* createColorSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post(`https://ducanh-server.herokuapp.com/colors`, data);
    yield put({ type: SUCCESS(COLOR_ACTION.CREATE_COLOR) });
    yield put({ type: REQUEST(COLOR_ACTION.GET_COLOR_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(COLOR_ACTION.CREATE_COLOR),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* updateColorSaga(action) {
  try {
    const { id, data } = action.payload;
    yield axios.patch(`https://ducanh-server.herokuapp.com/colors/${id}`, data);
    yield put({ type: SUCCESS(COLOR_ACTION.UPDATE_COLOR) });
    yield put({ type: REQUEST(COLOR_ACTION.GET_COLOR_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(COLOR_ACTION.UPDATE_COLOR),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

function* deleteColorSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`https://ducanh-server.herokuapp.com/colors/${id}`);
    yield put({ type: SUCCESS(COLOR_ACTION.DELETE_COLOR) });
    yield put({ type: REQUEST(COLOR_ACTION.GET_COLOR_LIST) });
  } catch (e) {
    yield put({
      type: FAIL(COLOR_ACTION.DELETE_COLOR),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  }
}

export default function* productSaga() {
  yield debounce(300, REQUEST(COLOR_ACTION.GET_COLOR_LIST), getColorListSaga);
  yield takeEvery(REQUEST(COLOR_ACTION.CREATE_COLOR), createColorSaga);
  yield takeEvery(REQUEST(COLOR_ACTION.UPDATE_COLOR), updateColorSaga);
  yield takeEvery(REQUEST(COLOR_ACTION.DELETE_COLOR), deleteColorSaga);
}
