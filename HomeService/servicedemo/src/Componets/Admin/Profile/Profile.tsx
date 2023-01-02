import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import "../../../styles/style.css"


const card = (
  <React.Fragment>
    <CardContent>
      <div style={{ display: "flex" }}>
        <AccountCircleIcon sx={{ fontSize: 70, color: "#a9a9a9" }} />
        <Typography marginTop={3}>Owner212@gmail.com</Typography>
      </div>
    </CardContent>
    <CardActions>{/* <Button size="small">Learn More</Button> */}</CardActions>
  </React.Fragment>
);

export default function Profile() {
  return (
    <Box className="adminbox">
      <Typography variant="h5">Admin Profile</Typography>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
