import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../Css/demo.css";
import MediaCard from "../Componets/Card";

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
      <div className="card" style={{ display: "flex", flexDirection: "row" }}>
        <MediaCard
          title="Medical Service"
          decription="  We are Provide Medical service in customber need medicen treatment"
        />
        <MediaCard
          title="Car Service"
          decription="  We are Provide Medical service in customber need medicen treatment"
        />
        <MediaCard
          title="Beauty And HairCare Service"
          decription="  We are Provide Medical service in customber need medicen treatment"
        />
        <MediaCard
          title="Washing And Cleaning Service"
          decription="  We are Provide Medical service in customber need medicen treatment"
        />
        <MediaCard
          title="Laundry Service"
          decription="  We are Provide Medical service in customber need medicen treatment"
        />
      </div>
    </>
  );
};
export default Home;
