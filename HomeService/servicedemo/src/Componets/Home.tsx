import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/style.css";
import MediaCard from "./Home/HomeLayout/Card";
import { getcategory } from "../store/categorySlice";
import { useAppdispatch, useAppselector } from "../hooks";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

const Home = () => {
  const dispatch = useAppdispatch();
  const categorystate = useAppselector((state) => state.category);
  let arr = categorystate?.getcategoryData;
  useEffect(() => {
    dispatch(getcategory());
  }, []);
  return (
    <div>
      <Stack spacing={1}>
        <Box>
          <Typography variant="h6" className="Title">
            We are Provide On-Demand Home Services
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" className="Heading">
            On-Demand Home Service Provide Business Listing, Booking Online All
            About Service in Below Need
          </Typography>
        </Box>
      </Stack>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
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
