import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, PRODUCT_IMAGES_ACTION } from "../constants";

const initialState = {
  productImagesList: {
    data: [],
    loading: false,
    error: null,
  },
  createProductImagesData: {
    loading: false,
    error: null,
  },
  productImagesData: {
    loading: false,
    error: null,
  },
};

const productImagesReducer = createReducer(initialState, {
  [REQUEST(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST)]: (state) => {
    return {
      ...state,
      productImagesList: {
        ...state.productImagesList,
        loading: true,
        error: null,
      },
    };
  },

  [SUCCESS(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      productImagesList: {
        ...state.productImagesList,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_IMAGES_ACTION.GET_PRODUCT_IMAGES_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productImagesList: {
        ...state.productImagesList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_IMAGES_ACTION.CREATE_PRODUCT_IMAGES)]: (state, action) => {
    return {
      ...state,
      createProductImagesData: {
        ...state.createProductImagesData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_IMAGES_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductImagesData: {
        ...state.createProductImagesData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_IMAGES_ACTION.CREATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createProductImagesData: {
        ...state.createProductImagesData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_IMAGES_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      productImagesData: {
        ...state.productImagesData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_IMAGES_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      productImagesData: {
        ...state.productImagesData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_IMAGES_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productImagesData: {
        ...state.productImagesData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_IMAGES_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      productImagesData: {
        ...state.productImagesData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_IMAGES_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      productImagesData: {
        ...state.productImagesData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_IMAGES_ACTION.DELETE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productImagesData: {
        ...state.productImagesData,
        loading: false,
        error: error,
      },
    };
  },
});

export default productImagesReducer;
