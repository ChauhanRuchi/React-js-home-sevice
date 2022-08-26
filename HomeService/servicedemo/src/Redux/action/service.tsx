import axios from "axios";

import store from "../../store";

type DispatchType = typeof store.dispatch;
export const service = (formdata: any) => (dispatch: DispatchType) => {
  axios
    .post("http://localhost:2009/HomeService/service", {
      formdata,
    })
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
