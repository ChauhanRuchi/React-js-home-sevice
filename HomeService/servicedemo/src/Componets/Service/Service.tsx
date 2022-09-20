import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Login from "../Login";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";


export default function SubServiceCard(Props: any) {
  const [click,setclick]=useState(false);
  let { id } = useParams();
  let navigate = useNavigate();
  let Token;
  return (
    <Grid xs={6} md={3}>
      <Card  style={{ margin: "20px" }}>
    <CardMedia
      component="img"
      height="140"
      image={Props.image}
      alt="green iguana"
      onClick={() => {
        {
          
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
      <div style={{display:"flex"}}>
        <Typography gutterBottom variant="body2" component="div">Charge:-</Typography>
        <Typography gutterBottom variant="body2" color="text.secondary"component="div">{Props.charge}</Typography>
      </div>
      <Button variant="contained" onClick={()=>{
          navigate("../Bookservice/"+Props.id)
        console.log(id)}} style={{background:"#214758",marginTop:"5px"}}>Book Now</Button>
    </CardContent>
    <CardActions></CardActions>
  </Card>
      </Grid>

    
   
  );
}
