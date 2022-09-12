import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import "../../../Css/demo.css"
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Booking=()=>{
    let date=new Date()
    const [age, setAge] =useState('');
    const [value, setValue] = useState<Dayjs | null>(null);
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
  
    return <>
    <div className='bookingservice'>
    <Typography variant="h5" >
     Book The Service
      </Typography>
      <div className='User'>
      <TextField id="outlined-basic" style={{width:"300px",margin:"10px"}} label="Enter Your Name" variant="outlined" />
       <TextField id="outlined-basic" style={{width:"300px",margin:"10px"}} label="Enter Your Contact Number" variant="outlined" />
      </div>
      <div className='Address'>
      <TextField id="outlined-basic" style={{width:"300px",margin:"10px"}} label="Enter Your BillingAddresss" variant="outlined" />
       <TextField id="outlined-basic" style={{width:"300px",margin:"10px"}} label="Enter Your DeliveryAddress" variant="outlined" />
      </div>
      <div style={{display:"flex"}}>
        <Typography variant='h5' sx={{margin:"10px"}}>Available This Service</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
         minDate="09/12/2022"
         maxDate='12/31/2022'
        label="select your delivery date"
        value={value}
        onChange={(newValue:any) => {
          console.log(newValue.$D)
         if(newValue.$D=="14"){
          setValue(null);
         }
         else{
          setValue(newValue);
         }
         
        }}
        renderInput={(params:any) => <TextField {...params} />}
      />
    </LocalizationProvider>
      </div>

      <div style={{display:"flex",margin:"10px"}} className="Processed Payment">
      <Button variant="contained">Procced Payment</Button>
      </div>
      
    </div>
    </>
}
export default Booking;