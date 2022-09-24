import * as React from "react";
import MainService from "./MainService";
import MainServiceTable from "./MainServiceTable";
import Alert from "@mui/material/Alert";
import service from "../../../store/Reducer/service";
import { clearservicedata } from "../../../store/action/service";

import { useSelector, useDispatch } from "react-redux";

export default function ServiceCreate() {
  const state = useSelector((state: any) => state.service);
  const dispatch = useDispatch<any>();

  return (
    <>
      <MainService />
      <MainServiceTable />
      {state?.createsucess && (
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Alert
            severity="success"
            color="info"
            style={{ color: "#fff", background: "#214758" }}
          >
            successfully created Service
          </Alert>
        </div>
      )}
       {state?.editsucess && (
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Alert
            severity="success"
            color="info"
            style={{ color: "#fff", background: "#214758" }}
          >
            successfully edit Service
          </Alert>
        </div>
      )}
 
    </>
  );
}
