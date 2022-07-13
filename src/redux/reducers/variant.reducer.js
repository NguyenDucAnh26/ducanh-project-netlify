import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, VARIANT_ACTION } from "../constants";

const initialState = {
  variantList: {
    data: [],
    loading: false,
    error: null,
  },
  createVariantData: {
    loading: false,
    error: null,
  },
  variantData: {
    loading: false,
    error: null,
  },
};

const variantReducer = createReducer(initialState, {
  [REQUEST(VARIANT_ACTION.GET_VARIANT_LIST)]: (state) => {
    return {
      ...state,
      variantList: {
        ...state.variantList,
        loading: true,
        error: null,
      },
    };
  },

  [SUCCESS(VARIANT_ACTION.GET_VARIANT_LIST)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      variantList: {
        ...state.variantList,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(VARIANT_ACTION.GET_VARIANT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      variantList: {
        ...state.variantList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(VARIANT_ACTION.CREATE_VARIANT)]: (state, action) => {
    return {
      ...state,
      createVariantData: {
        ...state.createVariantData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(VARIANT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createVariantData: {
        ...state.createVariantData,
        loading: false,
      },
    };
  },
  [FAIL(VARIANT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createVariantData: {
        ...state.createVariantData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(VARIANT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      variantData: {
        ...state.variantData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(VARIANT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      variantData: {
        ...state.variantData,
        loading: false,
      },
    };
  },
  [FAIL(VARIANT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      variantData: {
        ...state.variantData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(VARIANT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      variantData: {
        ...state.variantData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(VARIANT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      variantData: {
        ...state.variantData,
        loading: false,
      },
    };
  },
  [FAIL(VARIANT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      variantData: {
        ...state.variantData,
        loading: false,
        error: error,
      },
    };
  },
});

export default variantReducer;
