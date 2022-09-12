import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircleIcon from '@mui/icons-material/Circle';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
  
    <CardContent>
     
      <CircleIcon sx={{ fontSize: 70,color:"#a9a9a9" }}/>

    </CardContent>
    <CardActions>
      {/* <Button size="small">Learn More</Button> */}
    </CardActions>
  </React.Fragment>
);

export default function Profile() {
  return (
    <Box sx={{width:"300px", margin:"20px"}}>
        <Typography variant='h5' >Admin Profile</Typography>
      <Card variant="outlined" style={{marginTop:"10px"}}>{card}</Card>
    </Box>
  );
}
