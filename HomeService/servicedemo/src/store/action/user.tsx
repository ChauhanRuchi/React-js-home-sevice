import axios from "axios";
import { string } from "yup";
import store from "../../store";

type DispatchType = typeof store.dispatch;

let signupurl = process.env.REACT_APP_URl_SIGNUP||"";
let signinurl = process.env.REACT_APP_URl_SIGNIN||"";
let userdata=process.env.REACT_APP_URl_GETUSERDATA||"";

export const signup = (formdata: any) => (dispatch: DispatchType) => {
  axios
    .post(signupurl, {
      formdata,
    })
    .then((res) => {
      dispatch({
        type: "SET_CURRENT_USER",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "SET_CURRENT_USER_ERROR",
        payload: response.data,
      });
    });
};

export const signin = (formdata: any) => (dispatch: any) => {
  axios
    .post(signinurl, {
      formdata,
    })
    .then((res) => {
      return dispatch({
        type: "GET_CURRENT_USER",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      return dispatch({
        type: "GET_CURRENT_USER",
        payload: response.data,
      });
    });
};

export const logout = () => (dispatch: any) => {
  return dispatch({
    type: "LOGOUT_USER",
    payload: null,
  });
};
export const getuserdata =(dispatch: any) => {
  axios
    .get(userdata, {
    })
    .then((res) => {
      return dispatch({
        type: "GET_USER_DATA",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      return dispatch({
        type: "GET_USER_ERROR",
        payload: response.data,
      });
    });
};