import { createAction } from "@reduxjs/toolkit";
import { REQUEST, PRODUCT_IMAGES_ACTION } from "../constants";

export const getProductImagesListAction = createAction(
  REQUEST(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST)
);
export const createProductImagesAction = createAction(
  REQUEST(PRODUCT_IMAGES_ACTION.CREATE_PRODUCT_IMAGES)
);
export const updateProductImagesAction = createAction(
  REQUEST(PRODUCT_IMAGES_ACTION.UPDATE_PRODUCT_IMAGES)
);
export const deleteProductImagesAction = createAction(
  REQUEST(PRODUCT_IMAGES_ACTION.DELETE_PRODUCT_IMAGES)
);
