import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MainServiceFillter(){
 return <>
   <Stack spacing={2} direction="row"  style={{display: "flex", justifyContent: "flex-end", width: "100%",marginRight:"40px",marginTop:"20px"}}>
      <Button variant="outlined" 
     >Fillter
     </Button>
    </Stack>
 </>
  
  
}