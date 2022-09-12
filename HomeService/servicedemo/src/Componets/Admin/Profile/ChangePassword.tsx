import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {changepass} from "../../../Redux/action/admin"
import admin from "../../../Redux/Reducer/admin"
import { useState } from 'react';
import { useEffect } from 'react';
import "../../../Css/demo.css"
import { useSelector,useDispatch } from 'react-redux';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function ChangePassword() {
    var formData = new FormData();
    const statepassword = useSelector((state: any) => state.admin.datapassword);
    const dispatch = useDispatch<any>();

    console.log(statepassword)
    const [oldpassword,setoldpassword]=useState("");
    const [newpassword,setnewpassword]=useState("");
    const [confirmpassword,setconfirmpassword]=useState("");
    formData.append("oldpassword",oldpassword);
    formData.append("newpassword",newpassword);
    formData.append("confirmpassword",confirmpassword);      
    console.log(oldpassword)
   let pass=()=>{
        dispatch( changepass(formData))
 
   }
    const card = (
    
        <React.Fragment>
          
          <CardContent>
            <TextField
                id="password-input"
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
               className='changepass'
                value={oldpassword}
                onChange={(e)=>{ setoldpassword(e.target.value)}}
              />
              <TextField
                id="newpassword-input"
                fullWidth
                label="NewPassword"
                type="password"
                autoComplete="current-password"
                variant="filled"
                className='changepass'
                value={newpassword}
                onChange={(e)=>{ setnewpassword(e.target.value)}}
              />
              <TextField
                id="confirmpassword-input"
                fullWidth
                label="ConfirmPassword"
                type="password"
                autoComplete="current-password"
                variant="filled"
                className='changepass'
                value={confirmpassword}
                onChange={(e)=>{ setconfirmpassword(e.target.value)}}
              />
                <Button variant="outlined" fullWidth style={{marginTop:"20px"}} onClick={()=> pass()}>Change Password</Button>
          </CardContent>
          <CardActions>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </React.Fragment>
      );
  return (
    <Box sx={{width:"350px", margin:"20px"}}>
        <Typography variant='h5' >ChangePassword</Typography>
      <Card variant="outlined" style={{marginTop:"10px"}}>{card}</Card>
    </Box>
  );
}
