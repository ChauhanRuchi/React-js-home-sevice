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

export const getsubservice = (formdata: any) => (dispatch: DispatchType) => {
  axios
    .get("http://localhost:2009/HomeService/getservicebysub/" + formdata?._id)
    .then((res) => {
      console.log(res);
      dispatch({
        type: "GET_CURRENT_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response);

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
      console.log(res);
      dispatch({
        type: "GET_CURRENT_MAINSERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response);

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
      console.log(res);
      dispatch({
        type: "GET_CURRENT_SUBSERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response);

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
        console.log(res);
        dispatch({
          type: "EDIT_CURRENT_SERVICE",
          payload: res.data,
        });
      })
      .catch(({ response }) => {
        console.log(response);
        dispatch({
          type: "EDIT_ERROR_SERVICE",
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
      console.log(res);
      dispatch({
        type: "DELETE_CURRENT_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response);
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
      console.log(res);
      dispatch({
        type: "DELETE_SUB_SERVICE",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response);
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
      console.log(res);
      dispatch({
        type: "GET_SEARCHBYID",
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      console.log(response);

      dispatch({
        type: "GET_SEARCHBYID",
        payload: response.data,
      });
    });
};
