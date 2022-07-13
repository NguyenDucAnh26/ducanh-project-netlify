import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, COLOR_ACTION } from "../constants";

const initialState = {
  colorList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  createColorData: {
    loading: false,
    error: null,
  },
  colorData: {
    loading: false,
    error: null,
  },
};

const colorReducer = createReducer(initialState, {
  [REQUEST(COLOR_ACTION.GET_COLOR_LIST)]: (state) => {
    return {
      ...state,
      colorList: {
        ...state.colorList,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(COLOR_ACTION.GET_COLOR_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;

    return {
      ...state,
      colorList: {
        ...state.colorList,
        data: more ? [...state.colorList.data, ...data] : data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(COLOR_ACTION.GET_COLOR_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      colorList: {
        ...state.colorList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(COLOR_ACTION.CREATE_COLOR)]: (state, action) => {
    return {
      ...state,
      createColorData: {
        ...state.createColorData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(COLOR_ACTION.CREATE_COLOR)]: (state, action) => {
    return {
      ...state,
      createColorData: {
        ...state.createColorData,
        loading: false,
      },
    };
  },
  [FAIL(COLOR_ACTION.CREATE_COLOR)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createColorData: {
        ...state.createColorData,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(COLOR_ACTION.DELETE_COLOR)]: (state, action) => {
    return {
      ...state,
      colorData: {
        ...state.colorData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(COLOR_ACTION.DELETE_COLOR)]: (state, action) => {
    return {
      ...state,
      colorData: {
        ...state.colorData,
        loading: false,
      },
    };
  },
  [FAIL(COLOR_ACTION.DELETE_COLOR)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      colorData: {
        ...state.colorData,
        loading: false,
        error: error,
      },
    };
  },
});

export default colorReducer;
