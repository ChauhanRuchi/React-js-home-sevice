import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../../../Css/demo.css";
import MediaCard from "../HomeLayout/Card";
import { Margin } from "@mui/icons-material";

const Home = () => {
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
        <MediaCard
          title="Medical Service"
          decription="  We are Provide Medical service in customber need medicen treatment and post party cleaning"
          image="https://lh5.googleusercontent.com/pf9_7LegoqFMH4_GflP7gPNyT7CM48BGEopSXQGxzMH548n0qDTJ1vkLo9lq9L27rhvMlrZBbk00YWaQE1E1ns6oY9ygANuli-zSQdxCg0Yx9Rc3x_jJfGCGDkj5TTav6T4gpAIKM9af1hAvWA"
          id="1"
        />
        <MediaCard
          title="Car Service"
          decription="  We are Provide Car service in customber Deack Cleaning/Sealing And Screens-Newand Repair all other"
          image="https://stevesorensenmechanical.com.au/wp-content/uploads/service-resize-1030x687.jpg"
          id="2"
        />
        <MediaCard
          title="Beauty And HairCare Service"
          decription="  We are Provide Beauty And HairCare service in customber Hair cut,Hair Wash all other"
          image="https://www.barnsley.ac.uk/app/uploads/2020/09/Hair-and-Beauty-web.jpg"
          id="3"
        />
        <MediaCard
          title="Washing And Cleaning Service"
          decription="  We are Provide Medical service in customber need medicen treatment"
          image="https://tse1.mm.bing.net/th?id=OIP.mM6QC1zCn03mzpXusrhpigHaE8&pid=Api&P=0"
          id="4"
        />
        <MediaCard
          title="Laundry Service"
          decription="  We are Provide Laundry Service in customber need medicen treatment"
          image="https://ecolivinglaundry.com/wp-content/uploads/2018/03/Commercial-Service-1-1024x683.jpeg"
          id="5"
        />
      </div>
    </>
  );
};
export default Home;
