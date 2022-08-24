import axios from "axios";

import store from "../store";

type DispatchType = typeof store.dispatch;

export const signup = (formdata: any) => (dispatch: DispatchType) => {
  axios
    .post("http://localhost:2009/HomeService/signup", {
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
        type: "SET_CURRENT_USER",
        payload: response.data,
      });
    });
};

export const signin = (formdata: any) => (dispatch: any) => {
  axios
    .post("http://localhost:2009/HomeService/signin", {
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
