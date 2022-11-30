import * as React from "react";
import MainService from "./MainService";
import MainServiceTable from "./MainServiceTable";
import Alert from "@mui/material/Alert";
import MainServiceFillter from "./MainServiceFillter";
import { useSelector, useDispatch } from "react-redux";
import FillterSidePanel from "./FillterSidePanel";

export default function ServiceCreate() {
  const state = useSelector((state: any) => state?.category);

  return (
    <>
      <MainService />
      <MainServiceFillter />
      <div style={{ display: "flex", width: "100%" }}>
        {/* <FillterSidePanel/> */}
        <MainServiceTable />
      </div>

      {state?.createCategory?.data == true && (
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
      {state?.editCategory?.edit == true && (
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
