import { createAction } from "@reduxjs/toolkit";
import { REQUEST, ORDER_ACTION } from "../constants";

export const getOrderListAction = createAction(
  REQUEST(ORDER_ACTION.GET_ORDER_LIST)
);
export const createOrderAction = createAction(
  REQUEST(ORDER_ACTION.CREATE_ORDER)
);
export const updateOrderAction = createAction(
  REQUEST(ORDER_ACTION.UPDATE_ORDER)
);
export const deleteOrderAction = createAction(
  REQUEST(ORDER_ACTION.DELETE_ORDER)
);
export const getOrderDetailAction = createAction(
  REQUEST(ORDER_ACTION.GET_ORDER_DETAIL)
);
export const clearOrderDetailAction = createAction(
  REQUEST(ORDER_ACTION.CLEAR_ORDER_DETAIL)
);
