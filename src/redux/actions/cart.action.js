import { createAction } from "@reduxjs/toolkit";
import { REQUEST, CART_ACTION } from "../constants";

export const getCartListAction = createAction(
  REQUEST(CART_ACTION.GET_CART_LIST)
);

export const createCartAction = createAction(REQUEST(CART_ACTION.CREATE_CART));
export const deleteCartAction = createAction(REQUEST(CART_ACTION.DELETE_CART));
export const getCartTotalAction = createAction("getCartTotal");
export const increaseAction = createAction("increase");
export const decreaseAction = createAction("decrease");
export const removeAction = createAction("remove");
export const cleanCartAction = createAction("clean");
