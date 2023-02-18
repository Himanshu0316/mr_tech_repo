export const GET_TEXT_REQ = "GET_TEXT_REQ";
export const GET_TEXT_ERROR = "GET_TEXT_ERROR";
export const GET_TEXT_SUCCESS = "GET_TEXT_SUCCESS";


export const getTextReq = () => ({
  type: GET_TEXT_REQ,
});

export const getTextError = () => ({
  type: GET_TEXT_ERROR,
});

export const getTextSuccess = (payload) => ({
  type: GET_TEXT_SUCCESS,
  payload,
});

