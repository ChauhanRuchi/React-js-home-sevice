import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function SubServiceCard(Props: any) {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <Grid item xs={2} sm={4} md={4}  >
      <Card className="cardsubservice">
        <CardMedia
          component="img"
          height="140"
          image={Props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {Props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Props.decription}
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography gutterBottom variant="body2" component="div">
              Charge:-
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{color:"#214758"}}
            >
              {`${Props.charge}$`}
            </Typography>
          </div>
          <Button
            variant="contained"
            onClick={() => {
              navigate("../Bookservice/" + Props?.id);
              console.log(id);
            }}
            className="booknow"
          >
            Book Now
          </Button>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
}
