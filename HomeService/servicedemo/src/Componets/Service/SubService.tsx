import SubServiceCard from "./Service";
import Typography from "@mui/material/Typography";
import { getsubservice } from "../../Redux/action/service";
import service from "../../Redux/Reducer/service";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";


import "../../../src/Css/demo.css";
import { serialize } from "v8";

const Service = (Props:any) => {
  const dispatch = useDispatch<any>();
  let { id } = useParams();
  console.log("sub",id)

  const state1 = useSelector((state: any) => state.service);
  let servicearr=state1.subservicedata;
  let servicename=state1?.mainservicedata;
  servicename?.map(function(item:any){
    console.log(item.servicename)
  })
  useEffect(() => {
    dispatch(getsubservice({_id:id}));
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
