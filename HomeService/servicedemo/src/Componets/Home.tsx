import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../Css/demo.css";
import MediaCard from "./Home/HomeLayout/Card";
import { Margin } from "@mui/icons-material";
import { getservice } from "../Redux/action/service";
import  service  from "../Redux/Reducer/service";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch<any>();
  const state1 = useSelector((state: any) => state.service);
  let arr = state1.mainservicedata;
 
  useEffect(() => {
    dispatch(getservice);
  }, []);
  return (
    <>
      <Box sx={{ width: "100%" }} className="zoom-in-out-box">
        <Typography variant="h4" className="Title">
          We are Provide On-Demand Home Services
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h5"
          style={{
            color: "#404040",
            alignContent: "center",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          On-Demand Home Service Provide Business Listing, Booking Online All
          About Service in Below Need
        </Typography>
      </Box>
      <div
        className="card"
        style={{ display: "flex", flexDirection: "row", marginTop: "35px" }}

      >
        {
           arr?.map(function(item:any){

      return  <MediaCard
          title={item?.servicename}
          decription={item?.decription}
          image={item?.url}
           id={item?._id} 
        />
           })
        }
      </div>
    </>
  );
};
export default Home;
