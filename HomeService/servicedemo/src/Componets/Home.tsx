import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/demo.css";
import MediaCard from "./Home/HomeLayout/Card";
import { Margin } from "@mui/icons-material";
import { getservice } from "../store/action/service";
import service from "../store/Reducer/service";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Container, Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch<any>();
  const state1 = useSelector((state: any) => state.service);
  let arr = state1.mainservicedata;

  useEffect(() => {
    dispatch(getservice);
  }, []);
  return (
    <div > 
      <Stack spacing={3}>
        <Box >
          <Typography variant="h5" className="Title">
            We are Provide On-Demand Home Services
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" className="Heading">
            On-Demand Home Service Provide Business Listing, Booking Online All
            About Service in Below Need
          </Typography>
        </Box>
      </Stack>

      <Grid container spacing={2}>
        {arr?.map(function (item: any) {
          return (
            <MediaCard
              title={item?.servicename}
              decription={item?.decription}
              image={item?.url}
              id={item?._id}
            />
          );
        })}
      </Grid>
    </div>
  );
};
export default Home;
