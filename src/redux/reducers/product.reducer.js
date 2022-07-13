import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, PRODUCT_ACTION } from "../constants";

const initialState = {
  productList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  productListUser: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  viewedProducts: {
    data: localStorage.getItem("viewedProducts")
      ? JSON.parse(localStorage.getItem("viewedProducts"))
      : [],
    loading: false,
    error: null,
  },
  productDetail: {
    data: {},
    loading: false,
    error: null,
  },
  createProductData: {
    loading: false,
    error: null,
  },
  updateProductData: {
    loading: false,
    error: null,
  },
  deleteProductData: {
    loading: false,
    error: null,
  },
};

const productReducer = createReducer(initialState, {
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state) => {
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_USER)]: (state) => {
    return {
      ...state,
      productListUser: {
        ...state.productListUser,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_USER)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      productListUser: {
        ...state.productListUser,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productListUser: {
        ...state.productListUser,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.GET_VIEWED_PRODUCTS)]: (state) => {
    const item = state.viewedProducts.data.find(
      (item) => item.id === state.productDetail.data.id
    );
    if (!item && state.productDetail.data.name) {
      localStorage.setItem(
        "viewedProducts",
        JSON.stringify(state.viewedProducts.data)
      );
      return {
        ...state,
        viewedProducts: {
          ...state.viewedProducts,
          data: [state.productDetail.data, ...state.viewedProducts.data],
        },
      };
    }
  },
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state) => {
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: true,
        error: null,
      },
    };
  },

  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { data } = action.payload;

    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.CLEAR_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: {
        data: {},
        loading: false,
        error: null,
      },
    };
  },
});

export default productReducer;
