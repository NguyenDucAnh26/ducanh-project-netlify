import { createAction } from "@reduxjs/toolkit";
import { REQUEST, COLOR_ACTION } from "../constants";

export const getColorListAction = createAction(
  REQUEST(COLOR_ACTION.GET_COLOR_LIST)
);

export const createColorAction = createAction(
  REQUEST(COLOR_ACTION.CREATE_COLOR)
);
export const deleteColorAction = createAction(
  REQUEST(COLOR_ACTION.DELETE_COLOR)
);
