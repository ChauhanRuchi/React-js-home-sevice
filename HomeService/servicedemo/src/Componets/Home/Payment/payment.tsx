
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    getsubservicebyid
  } from "../../../Redux/action/service";
  import service from "../../../Redux/Reducer/service"
  import { CardMedia } from '@mui/material';

export default function Payment() {
    let { id } = useParams();
    const dispatch = useDispatch<any>();
    const stateservice = useSelector((state: any) => state.service.getsubservicebyid);

    const card = (
    
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
             Your Order has been confirmed and will be provide service soon
            </Typography>
            <div style={{display:"flex",justifyContent:"center"}}>
              <div style={{marginRight:"5px"}}>
              <Typography color="text.secondary" gutterBottom >
              orderdate
            </Typography>
            <Typography  gutterBottom >
              {new Date().toISOString().substring(0,10)}
            </Typography>
              </div>
              <div >
              <Typography color="text.secondary" gutterBottom >
              ordertime
            </Typography>
            <Typography  gutterBottom >
              { new Date().toLocaleTimeString()}
            </Typography>
              </div>
              <div style={{marginLeft:"5px"}}>
                {
                    stateservice?.map((item:any)=>{
            return <>
            <Typography color="text.secondary" gutterBottom >
              servicecharge
            </Typography>
            <Typography  gutterBottom >
              { item?.charge}
            </Typography>
            </>
                    })
                }
              
              </div>
              

            </div>
            <div style={{display:"flex"}}>
              {
                    stateservice?.map((item:any)=>{
                     return <>
                     <img src={item?.url} style={{ width: 80, height: 80 }}></img>
                     <div style={{margin:"12px"}}>
                     <Typography>{item?.servicename}</Typography>
                     <Typography>{item?.decription}</Typography>
                     </div>
                    
                     </>  

                    })}
            
              </div>
           
          </CardContent>
          <CardActions>
          </CardActions>
        </React.Fragment>
      );
      const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      useEffect(()=>{
        dispatch(getsubservicebyid({_id:id}))
    },[])
  return (
    <>
        
         <Typography variant="h4" sx={{margin:"15px",justifyContent:'center',display:"flex"}}>OrderSummary</Typography>

     <Box maxWidth="100%"display="flex"
  justifyContent="center"
  alignItems="center"
  marginBottom="15px"
  >
      <Card variant="outlined"  >{card}</Card>
    </Box>
    </>
   
  );
}