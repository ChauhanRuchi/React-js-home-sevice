import SubServiceCard from "./CardSubService";
import Typography from "@mui/material/Typography";
import { getsubservice } from "../../Redux/action/service";
import service from "../../Redux/Reducer/service";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "../../../src/Css/demo.css";
import { serialize } from "v8";

const Service = () => {
  const dispatch = useDispatch<any>();
  const state1 = useSelector((state: any) => state.service);
  let servicearr=state1.data;
  useEffect(() => {
    dispatch(getsubservice);
  }, []);
  return (
    <>
      <div className="main">
        <Typography variant="h5">SubService</Typography>

        <div
          className="card"
          style={{ display: "flex", flexDirection: "row", marginTop: "35px" }}
        >
          {
           servicearr?.map(function(item:any){

      return    <SubServiceCard
      title={item?.servicename}
      decription={item?.decription}
      image={item?.url}
      id="1"
    />
           })
        }
        
        
        </div>
      </div>
    </>
  );
};
export default Service;
