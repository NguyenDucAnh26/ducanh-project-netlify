import { fork } from "redux-saga/effects";

import userSaga from "./user.saga";
import productSaga from "./product.saga";
import variantSaga from "./variant.saga";
import productImagesSaga from "./productImages.saga";
import categorySaga from "./category.saga";
import colorSaga from "./color.saga";
import orderSaga from "./order.saga";
import commentSaga from "./comment.saga";

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(productSaga);
  yield fork(variantSaga);
  yield fork(productImagesSaga);
  yield fork(categorySaga);
  yield fork(colorSaga);
  yield fork(orderSaga);
  yield fork(commentSaga);
}
