import axios from "axios";
import { AnyNaptrRecord } from "dns";

import store from "../../store";

type DispatchType = typeof store.dispatch;

export const servicecre=(formdata:any)=>(dispatch:DispatchType)=>{
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
    },
  };
  axios
    .post("http://localhost:2009/HomeService/service", formdata, config)
    .then((res) => {
      dispatch({
        type: "SET_CURRENT_MAINSERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "SET_CURRENT_MAINSERVICE",
        payload: response.data,
      });
    });
}
export const subservice = (formdata: any) => (dispatch: DispatchType) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  axios
    .post("http://localhost:2009/HomeService/subservice", formdata, config)
    .then((res) => {
      dispatch({
        type: "SET_CURRENT_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "SET_CURRENT_SERVICE",
        payload: response.data,
      });
    });
};

export const getsubservice = (dispatch: DispatchType) => {
  
  axios
    .get("http://localhost:2009/HomeService/getsubservice")
    .then((res) => {
      console.log(res)
      dispatch({
        type: "GET_CURRENT_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response)

      dispatch({
        type: "GET_CURRENT_SERVICE",
        payload: response.data,
      });
    });
};

export const getservice=(dispatch:DispatchType)=>{
  axios
    .get("http://localhost:2009/HomeService/getservice")
    .then((res) => {
      console.log(res)
      dispatch({
        type: "GET_CURRENT_MAINSERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response)

      dispatch({
        type: "GET_CURRENT_MAINSERVICE",
        payload: response.data,
      });
    });
}
