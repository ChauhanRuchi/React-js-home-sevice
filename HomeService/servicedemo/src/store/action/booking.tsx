import axios from "axios";

import store from "../../store";

type DispatchType = typeof store.dispatch;

let setbookingurl=process.env.REACT_APP_URl_SETBOOKING||"";
let gettimeurl=process.env.REACT_APP_URl_GETTIME||"";
let getcitynameurl=process.env.REACT_APP_URl_CITYNAME||"";
let getbookdataurl=process.env.REACT_APP_URl_GETBOOKDATA||"";
let statusupdateurl=process.env.REACT_APP_URl_STATUSUPDATE||"";
let getbookinddatabyidurl=process.env.REACT_APP_URl_GETBOOKINGBYIDl

export const CreBooking = (formdata: any) => (dispatch: DispatchType) => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  };
  axios
    .post(setbookingurl, formdata, {
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
        type: "SET_ERROR_BOOKING",
        payload: response.data,
      });
    });
};
export const gettime = (dispatch: DispatchType) => {
  axios
    .get(gettimeurl)
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
    .get(getcitynameurl)
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
    .get(getbookdataurl)
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
export const statusupdate =
  (id: any, formdata: any) => (dispatch: DispatchType) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .patch(statusupdateurl + id,
        formdata,
        config
      )
      .then((res) => {
        dispatch({
          type: "STATUS_UPDATE",
          payload: res.data,
        });
      })
      .catch(({ response }) => {
        dispatch({
          type: "STATUS_UPDATE_ERROR",
          payload: response.data,
        });
      });
  };
  export const getbookingdatabyid = (id:any) => (dispatch: DispatchType) => {
    axios
      .get(getbookinddatabyidurl + id)
      .then((res) => {
        dispatch({
          type: "GET_BOOKINGDATA_BYID",
          payload: res.data,
        });
      })
      .catch(({ response }) => {
        dispatch({
          type: "ERROR_BOOKINGDATA_BYID",
          payload: response.data,
        });
      });
  };
 export const bookingdataclear = () => (dispatch: any) => {
   return dispatch({
      type: "SET_START_BOOKING",
      payload: [],
    });
  };

  export const clearstatebooking = () => (dispatch: any) => {
    return dispatch({
      type: "CLEAR_SET_BOOKING",
      payload: null,
    });
  };