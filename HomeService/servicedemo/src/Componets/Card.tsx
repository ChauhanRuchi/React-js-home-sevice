import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(Props: any) {
  return (
    <Card sx={{ width: 340 }} style={{ margin: "20px" }}>
      <CardMedia
        component="img"
        height="140"
        image="/Users/imac2021/Desktop/HomeService/servicedemo/src/Images/share.png"
        alt="green iguana"
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
    </Card>
  );
}
