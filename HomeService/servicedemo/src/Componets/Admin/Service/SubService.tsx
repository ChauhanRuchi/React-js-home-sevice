import * as React from "react";
import BasicModal from "../../Admin/Service/SubServiceCreate"
import StickyHeadTable from "./SubServiceTable"
import Button from "@mui/material/Button";
import service from "../../../Redux/Reducer/service";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";


export default function SubService() {
  const state = useSelector((state: any) => state.service);
  const dispatch = useDispatch<any>();
  return <>
    <BasicModal />
    <StickyHeadTable/>
    {state?.editsucesssub && (
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
 
}
