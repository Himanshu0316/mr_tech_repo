import {
  GET_TEXT_ERROR,
  GET_TEXT_REQ,
  GET_TEXT_SUCCESS,
} from "./action";

const initState = {
  isLoading: false,
  isError: false,
  textdata: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TEXT_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
        textdata: [],
      };
    case GET_TEXT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        textdata: [],
      };
    case GET_TEXT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        textdata: payload,
      };

    default:
      return state;
  }
};