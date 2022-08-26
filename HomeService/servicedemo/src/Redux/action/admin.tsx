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
