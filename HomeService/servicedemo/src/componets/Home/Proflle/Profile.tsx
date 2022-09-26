import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import user from "../../../store/Reducer/user"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function UserProfile() {
  const state = useSelector((state: any) => state?.signin?.data?.email);
  console.log("state....",state)
  const card = (
    <React.Fragment>
    
      <CardContent>
       <div style={{display:"flex"}}>
       <AccountCircleIcon sx={{ fontSize: 70,color:"#a9a9a9" }}/>   
        <Typography margin={3} >{state}</Typography>
       </div>
      
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{width:"400px", margin:"20px",height:"100px"}}>
        <Typography variant='h5' >User Profile</Typography>
      <Card variant="outlined" >{card}</Card>
    </Box>
  );
}
