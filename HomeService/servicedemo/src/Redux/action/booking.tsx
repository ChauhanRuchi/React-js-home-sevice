import axios from "axios";

import store from "../../store";

type DispatchType = typeof store.dispatch;
export const CreBooking = (formdata: any) => (dispatch: DispatchType) => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  };
  axios
    .post("http://localhost:2009/HomeService/Booking", formdata, {
      headers: {
        ...config.headers,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      dispatch({
        type: "SET_BOOKING",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "SET_BOOKING",
        payload: response.data,
      });
    });
};

export const gettime = (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/Booking/getavailabletime")
    .then((res) => {
      dispatch({
        type: "GET_AVAILABLE_TIME",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_AVAILABLE_TIME",
        payload: response.data,
      });
    });
};
export const getcityname = (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/Booking/getcityname")
    .then((res) => {
      dispatch({
        type: "GET_CITY_NAME",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_CITY_NAME",
        payload: response.data,
      });
    });
};
export const getbookingdata = (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/Booking/getbooingdata")
    .then((res) => {
      dispatch({
        type: "GET_BOOINGDATA",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_BOOINGDATA",
        payload: response.data,
      });
    });
};