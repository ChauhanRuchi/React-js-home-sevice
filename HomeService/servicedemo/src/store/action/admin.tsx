import axios from "axios";

import store from "../../store";

type DispatchType = typeof store.dispatch;
export const adminlogin = (formdata: any) => (dispatch: DispatchType) => {
  axios
    .post("http://localhost:2009/HomeService/admin/signin", {
      formdata,
    })
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_ADMIN",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_CURRENT_ADMIN",
        payload: response.data,
      });
    });
};

export const changepass = (formdata: any) => (dispatch: DispatchType) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
    },
  };
  axios
    .patch("http://localhost:2009/HomeService/admin/changepassword", 
      formdata,
      config
    )
    .then((res) => {
      dispatch({
        type: "CURRENT_CHANGEPASSWORD",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "CURRENT_CHANGEPASSWORD",
        payload: response.data,
      });
    });
};
export const logout = () => (dispatch: any) => {
  return dispatch({
    type: "LOGOUT_ADMIN",
    payload: null,
  });
};


export const clearstatepassword = () => (dispatch: any) => {
  return dispatch({
    type: "CLEAR_PASSWORD",
    payload: null,
  });
};
