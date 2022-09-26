import axios from "axios";
import { AnyNaptrRecord } from "dns";

import store from "../../store";

type DispatchType = typeof store.dispatch;

let setserviceurl=process.env.REACT_APP_URl_SETSERVICE||"";
let setsubserviceurl=process.env.REACT_APP_URl_SETSUBSERVICE||"";
let getsubserviceurl=process.env.REACT_APP_URl_GETSUBSERVICE||"";
let getserviceurl=process.env.REACT_APP_URl_GETSERVICE||"";
let getsubserviceallurl=process.env.REACT_APP_URl_GETSUBSERVICEALL||"";
let seteditservice=process.env.REACT_APP_URl_SETEDITSERVICE||"";
let seteditsubservice=process.env.REACT_APP_URl_SETEDITSUBSERVICE||"";
let setdeleteservice=process.env.REACT_APP_URl_SETDELETESERVICE||"";
let setdeletesubservice=process.env.REACT_APP_URl_SETDELETESUBSERVICE||"";
let getsearchbyidurl=process.env.REACT_APP_URl_GETSEARCHBYID||"";
let getsubservicebyidurl=process.env.REACT_APP_URl_GETSUBSERVICEBYID||"";



export const servicecre = (formdata: any) => (dispatch: DispatchType) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
    },
  };
  axios
    .post(setserviceurl, formdata, config)
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
    .post(setsubserviceurl, formdata, config)
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
    .get(getsubserviceurl + formdata?._id)
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
    .get(getserviceurl)
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
    .get(getsubserviceallurl)
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
       seteditservice + id,
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
       seteditsubservice + id,
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
    .delete(setdeleteservice + id, config)
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
    .delete(setdeletesubservice + id, config)
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
    .get(getsearchbyidurl+id)
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
    .get(getsubservicebyidurl + formdata?._id)
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
export const clearservicedatasub = () => (dispatch: any) => {
  return dispatch({
    type: "CLEAR_STATE_SUBSERVICE",
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
export const clearstatedelete = () => (dispatch: any) => {
  return dispatch({
    type: "DELETE_MAINSERVICE",
    payload: null,
  });
};
export const clearstatedeletesub = () => (dispatch: any) => {
  return dispatch({
    type: "DELETE_SUBSERVICE",
    payload: null,
  });
};