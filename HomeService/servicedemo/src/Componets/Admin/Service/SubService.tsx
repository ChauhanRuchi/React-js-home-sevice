import * as React from "react";
import BasicModal from "./SubServiceCreate";
import StickyHeadTable from "./SubServiceTable";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

export default function SubService() {
  const state = useSelector((state: any) => state?.category);

  return (
    <>
      <BasicModal />
      <StickyHeadTable />
      {state?.createsubCategory?.data == true && (
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
      {state?.editsubCategory?.edit == true && (
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
