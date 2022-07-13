import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, COMMENT_ACTION } from "../constants";

const initialState = {
  commentList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  sendCommentData: {
    loading: false,
    error: null,
  },
};

const commentReducer = createReducer(initialState, {
  [REQUEST(COMMENT_ACTION.GET_COMMENT_LIST)]: (state) => {
    return {
      ...state,
      commentList: {
        ...state.commentList,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(COMMENT_ACTION.GET_COMMENT_LIST)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      commentList: {
        ...state.commentList,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(COMMENT_ACTION.GET_COMMENT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      commentList: {
        ...state.commentList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(COMMENT_ACTION.SEND_COMMENT)]: (state, action) => {
    return {
      ...state,
      sendCommentData: {
        ...state.sendCommentData,
        loading: true,
        error: null,
      },
    };
  },
  [SUCCESS(COMMENT_ACTION.SEND_COMMENT)]: (state, action) => {
    return {
      ...state,
      sendCommentData: {
        ...state.sendCommentData,
        loading: false,
      },
    };
  },
  [FAIL(COMMENT_ACTION.SEND_COMMENT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      sendCommentData: {
        ...state.sendCommentData,
        loading: false,
        error: error,
      },
    };
  },
});

export default commentReducer;
