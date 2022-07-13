import { createAction } from "@reduxjs/toolkit";
import { REQUEST, PRODUCT_ACTION } from "../constants";

export const getProductListAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)
);
export const getProductListUserAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_USER)
);
export const getProductDetailAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)
);
export const createProductAction = createAction(
  REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)
);
export const updateProductAction = createAction(
  REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)
);
export const deleteProductAction = createAction(
  REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)
);
export const clearProductDetailAction = createAction(
  REQUEST(PRODUCT_ACTION.CLEAR_PRODUCT_DETAIL)
);
export const getViewedProducts = createAction(
  REQUEST(PRODUCT_ACTION.GET_VIEWED_PRODUCTS)
);
