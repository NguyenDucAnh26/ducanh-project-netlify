import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import userReducer from "../reducers/user.reducer";
import productReducer from "../reducers/product.reducer";
import variantReducer from "../reducers/variant.reducer";
import productImagesReducer from "../reducers/productImages.reducer";
import categoryReducer from "../reducers/category.reducer";
import colorReducer from "../reducers/color.reducer";
import cartReducer from "../reducers/cart.reducer";
import orderReducer from "../reducers/order.reducer";
import commentReducer from "../reducers/comment.reducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    variant: variantReducer,
    productImages: productImagesReducer,
    category: categoryReducer,
    color: colorReducer,
    cart: cartReducer,
    order: orderReducer,
    comment: commentReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);

export default store;
