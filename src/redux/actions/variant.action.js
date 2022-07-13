import { createAction } from "@reduxjs/toolkit";
import { REQUEST, VARIANT_ACTION } from "../constants";

export const getVariantListAction = createAction(
  REQUEST(VARIANT_ACTION.GET_VARIANT_LIST)
);
export const createVariantAction = createAction(
  REQUEST(VARIANT_ACTION.CREATE_VARIANT)
);
export const updateVariantAction = createAction(
  REQUEST(VARIANT_ACTION.UPDATE_VARIANT)
);
export const deleteVariantAction = createAction(
  REQUEST(VARIANT_ACTION.DELETE_VARIANT)
);
