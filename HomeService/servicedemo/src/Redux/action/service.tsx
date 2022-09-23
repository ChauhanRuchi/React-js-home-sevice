import axios from "axios";
import { AnyNaptrRecord } from "dns";

import store from "../../store";

type DispatchType = typeof store.dispatch;

export const servicecre = (formdata: any) => (dispatch: DispatchType) => {
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
        type: "SET_ERROR_MAINSERVICE",
        payload: response.data,
      });
    });
};
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
        type: "SET_CURRENT_SUBSERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "SET_SUBSERVICE_ERROR",
        payload: response.data,
      });
    });
};

export const getsubservice = (formdata: any) => (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/getservicebysub/" + formdata?._id)
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_CURRENT_SERVICE",
        payload: response.data,
      });
    });
};

export const getservice = (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/getservice")
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_MAINSERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_CURRENT_MAINSERVICE",
        payload: response.data,
      });
    });
};

export const getsubserviceall = (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/getsubservice")
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_SUBSERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_CURRENT_SUBSERVICE",
        payload: response.data,
      });
    });
};

export const editmainservice =
  (id: string, formdata: any) => (dispatch: DispatchType) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    };
    axios
      .patch(
        "http://localhost:2009/HomeService/editservice/" + id,
        formdata,
        config
      )
      .then((res) => {
        dispatch({
          type: "EDIT_CURRENT_SERVICE",
          payload: res.data,
        });
      })
      .catch(({ response }) => {
        dispatch({
          type: "EDIT_ERROR_SERVICE",
          payload: response.data,
        });
      });
  };
  export const editsubservice =
  (id: string, formdata: any) => (dispatch: DispatchType) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    };
    axios
      .patch(
        "http://localhost:2009/HomeService/editsubservice/" + id,
        formdata,
        config
      )
      .then((res) => {
        dispatch({
          type: "EDIT_SUB_SERVICE",
          payload: res.data,
        });
      })
      .catch(({ response }) => {
        dispatch({
          type: "EDIT_ERROR_SUBSERVICE",
          payload: response.data,
        });
      });
  };
export const deletemainservice = (id: string) => (dispatch: DispatchType) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
    },
  };
  axios
    .delete("http://localhost:2009/HomeService/deleteservice/" + id, config)
    .then((res) => {
      dispatch({
        type: "DELETE_CURRENT_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "DELETE_CURRENT_SERVICE",
        payload: response.data,
      });
    });
};
export const deletesubservice = (id: string) => (dispatch: DispatchType) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
    },
  };
  axios
    .delete("http://localhost:2009/HomeService/deletesubservice/" + id, config)
    .then((res) => {
      dispatch({
        type: "DELETE_SUB_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "DELETE_SUB_SERVICE",
        payload: response.data,
      });
    });
};
export const getsearchbyid =(id:string|undefined)=> (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/getsearchbyid/"+id)
    .then((res) => {
      dispatch({
        type: "GET_SEARCHBYID",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_SEARCHBYID",
        payload: response.data,
      });
    });
};

export const getsubservicebyid = (formdata: any) => (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/getsubservicebyid/" + formdata?._id)
    .then((res) => {
      dispatch({
        type: "GET_SUBSERVICE_BYID",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: "GET_SUBSERVICE_BYID",
        payload: response.data,
      });
    });
};
export const clearservicedata = () => (dispatch: any) => {
  return dispatch({
    type: "CLEAR_STATE",
    payload: null,
  });
};
export const cleareditservicedata = () => (dispatch: any) => {
  return dispatch({
    type: "CLEAR_STATE_EDIT",
    payload: null,
  });
};
export const cleareditsubservicedata = () => (dispatch: any) => {
  return dispatch({
    type: "CLEAR_STATE_SUBSERVICE_EDIT",
    payload: null,
  });
};