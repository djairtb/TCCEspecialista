import * as actionTypes from "./actionTypes";

export const loginSuccess = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
