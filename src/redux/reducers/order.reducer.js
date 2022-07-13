import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, ORDER_ACTION } from "../constants";

const initialState = {
  orderList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  createOrderData: {
    loading: false,
    error: null,
  },
  orderDetail: {
    data: {},
    loading: false,
    error: null,
  },
  orderData: {
    loading: false,
    error: null,
  },
};

const orderReducer = createReducer(initialState, {
  [REQUEST(ORDER_ACTION.GET_ORDER_LIST)]: (state) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: true,
        error: null,
      },
    };
  },

  [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(ORDER_ACTION.GET_ORDER_DETAIL)]: (state) => {
    return {
      ...state,
      orderDetail: {
        ...state.orderDetail,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_ORDER_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderDetail: {
        ...state.orderDetail,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ORDER_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderDetail: {
        ...state.orderDetail,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(ORDER_ACTION.CREATE_ORDER)]: (state, action) => {
    return {
      ...state,
      createOrderData: {
        ...state.createOrderData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.CREATE_ORDER)]: (state, action) => {
    return {
      ...state,
      createOrderData: {
        ...state.createOrderData,
        loading: false,
      },
    };
  },
  [FAIL(ORDER_ACTION.CREATE_ORDER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createOrderData: {
        ...state.createOrderData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.UPDATE_ORDER)]: (state, action) => {
    return {
      ...state,
      orderData: {
        ...state.orderData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.UPDATE_ORDER)]: (state, action) => {
    return {
      ...state,
      orderData: {
        ...state.orderData,
        loading: false,
      },
    };
  },
  [FAIL(ORDER_ACTION.UPDATE_ORDER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderData: {
        ...state.orderData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.DELETE_ORDER)]: (state, action) => {
    return {
      ...state,
      orderData: {
        ...state.orderData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(ORDER_ACTION.DELETE_ORDER)]: (state, action) => {
    return {
      ...state,
      orderData: {
        ...state.orderData,
        loading: false,
      },
    };
  },
  [FAIL(ORDER_ACTION.DELETE_ORDER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderData: {
        ...state.orderData,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(ORDER_ACTION.ORDER_DETAIL)]: (state, action) => {
    return {
      ...state,
      orderDetail: {
        data: {},
        loading: false,
        error: null,
      },
    };
  },
});

export default orderReducer;
