import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Login from "../../Login";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function MediaCard(Props: any) {
  let navigate = useNavigate();
  let Token;
  return (
    <Grid xs={6} md={3}>
      <Card style={{ margin: "20px" }}>
        <CardMedia
          component="img"
          height="140"
          image={Props.image}
          alt="green iguana"
          onClick={() => {
            {
              Token = localStorage.getItem("Token");
              console.log("gfgg", Token);
              if (Token === null || Token === undefined || Token === "")
                navigate("Login");
              else navigate("Service/" + Props.id);
            }
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Props.decription}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>{" "}
    </Grid>
  );
}
