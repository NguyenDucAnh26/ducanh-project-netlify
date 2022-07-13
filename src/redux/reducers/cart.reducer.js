import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, CART_ACTION } from "../constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cartList: {
    data: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    totalAmount: 0,
    totalCount: 0,
    loading: false,
    error: null,
  },
  createCartData: {
    loading: false,
    error: null,
  },
};

const cartReducer = createReducer(initialState, {
  [REQUEST(CART_ACTION.GET_CART_LIST)]: (state) => {
    let { totalAmount, totalCount } = state.cartList.data.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.totalAmount += itemTotal;
        cartTotal.totalCount += amount;
        return cartTotal;
      },
      { totalAmount: 0, totalCount: 0 }
    );
    localStorage.setItem("cartItems", JSON.stringify(state.cartList.data));
    return {
      ...state,
      cartList: {
        ...state.cartList,
        totalCount: totalCount,
        totalAmount: parseInt(totalAmount.toFixed(2)),
      },
    };
  },
  increase: (state, action) => {
    state.cartList.data = state.cartList.data.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
  },
  decrease: (state, action) => {
    state.cartList.data = state.cartList.data
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
  },
  remove: (state, action) => {
    state.cartList.data = state.cartList.data.filter(
      (item) => item.id !== action.payload
    );
  },
  clean: (state) => {
    state.cartList.data = [];
  },

  [REQUEST(CART_ACTION.CREATE_CART)]: (state, action) => {
    const { data } = action.payload;
    const item = state.cartList.data.find(
      (item) => item.variantId === data.variantId
    );
    if (item) {
      return {
        ...state,
        cartList: {
          data: state.cartList.data.map((item) =>
            item.variantId === data.variantId
              ? {
                  ...item,
                  amount: item.amount + 1,
                }
              : item
          ),
          totalAmount: state.cartList.totalAmount + data.price,
        },
      };
    }
    const newCart = {
      ...data,
      id: uuidv4(),
    };
    return {
      ...state,
      cartList: {
        ...state.cartList,
        data: [newCart, ...state.cartList.data],
      },
    };
  },

  [REQUEST(CART_ACTION.DELETE_CART)]: (state, action) => {
    return {
      ...state,
      cartData: {
        ...state.cartData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(CART_ACTION.DELETE_CART)]: (state, action) => {
    return {
      ...state,
      cartData: {
        ...state.cartData,
        loading: false,
      },
    };
  },
  [FAIL(CART_ACTION.DELETE_CART)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      cartData: {
        ...state.cartData,
        loading: false,
        error: error,
      },
    };
  },
});

export default cartReducer;
