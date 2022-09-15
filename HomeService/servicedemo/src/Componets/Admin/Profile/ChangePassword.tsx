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
import * as Yup from 'yup';
import { useFormik } from "formik";



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
    
   const ValidationSchema = Yup.object().shape({
    passwordinput: Yup.string().required('Required')
  });
  const formik = useFormik({
    validationSchema:{ValidationSchema},
    initialValues: {
      data: "",
      passwordinput: "",
      newpasswordinput: "",
      confirmpasswordinput: "",
    
    },
  
    onSubmit: async(values:any) => {
      console.log(values?.passwordinput)
      formData.append("oldpassword",values?.passwordinput);
      formData.append("newpassword",values?.newpasswordinput)
      formData.append("confirmpassword",values?.confirmpasswordinput)

      dispatch(changepass(formData))
    },
  });
    const card = (
    
        <React.Fragment>
          
          <CardContent>
          <form onSubmit={formik.handleSubmit} >
          <TextField
                id="passwordinput"
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
               className='changepass'
               onChange={formik.handleChange}
               error={formik.errors||formik.touched?true:false}
               helperText={formik.errors.passwordinput}
               defaultValue={formik.values.data||""||undefined&&formik.touched.passwordinput}
              />
              <TextField
                id="newpasswordinput"
                fullWidth
                label="NewPassword"
                type="password"
                autoComplete="current-password"
                variant="filled"
                className='changepass'
                onChange={formik.handleChange}
                  defaultValue={formik.values.data}
              />
              <TextField
                id="confirmpasswordinput"
                fullWidth
                label="ConfirmPassword"
                type="password"
                autoComplete="current-password"
                variant="filled"
                className='changepass'
                onChange={formik.handleChange}
                  defaultValue={formik.values.data}
              />
                <Button  type='submit' variant="outlined" fullWidth style={{marginTop:"20px"}}>Change Password</Button>
            </form>
            
         
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
