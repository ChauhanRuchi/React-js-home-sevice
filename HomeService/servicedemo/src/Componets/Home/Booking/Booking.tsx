import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import "../../../Css/demo.css"
import { useState,useEffect } from 'react';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';
import {getcityname,gettime,CreBooking} from "../../../Redux/action/booking"
import booking from "../../../Redux/Reducer/booking"
import { useSelector,useDispatch } from 'react-redux';
import { NestCamWiredStandTwoTone } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';


const Booking=()=>{
  var formData = new FormData();
    formData.append("name","tyy");
    formData.append("contactnumber","tyy");
    formData.append("billingaddress","tyy");
    formData.append("deliveryadress","tyy");
    formData.append("date","tyy");
    formData.append("time","tyy");
    formData.append("city","tyy");

  const statecity =useSelector((state: any) => state.booking.getcityname);
  const statetime =useSelector((state: any) => state.booking.gettime);
  const statebook =useSelector((state: any) => state.booking.setbooking);
  console.log("statebook",statebook)

  const dispatch = useDispatch<any>();
  let navigate = useNavigate();
  const today = new Date()
const tomorrow = new Date(today)

tomorrow.setDate(tomorrow.getDate() + 1)

tomorrow.toDateString()

    const [time, settime] =useState('');

    const [currdate,setcurrdate]=useState(false);
    const [tomorrowdate,settomorrowdate]=useState(false);

    const [value, setValue] = useState<Dayjs | null>(null);

    const handleChange = (event: SelectChangeEvent) => {
      settime(event.target.value as string);
    };
    useEffect(()=>{
      dispatch(getcityname)
      dispatch(gettime)
      dispatch(CreBooking(formData))
    },[])
    {console.log("cuu",currdate)}

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
      <div className='select'>
      <Select
          labelId="time_select"
          id="time_select"
          value={time}
          label="Time"
          onChange={handleChange}
          sx={{marginLeft:"5px",width:'200px',color:"#000"}}
        >
          {
            statecity?.map((item:any)=>{
              return <MenuItem value={item?.name}>{item?.name}</MenuItem>
            })
    
          }
         
        </Select>
      </div>
      <Typography variant='h5' sx={{margin:"10px"}}>Choose Delivery Time</Typography>
      <div style={{display:"flex"}}>
      <Button variant="outlined" sx={{width:"130px",margin:"5px"}} onClick={()=>
       {   settomorrowdate(false)
        setcurrdate(true)}
        }>Today</Button>
      <Button variant="outlined" sx={{width:"130px",margin:"5px"}} onClick={()=>
       { 
        settomorrowdate(true)
        setcurrdate(false)
        }
        }>Tommorow</Button>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
         minDate="09/12/2022"
         maxDate='12/31/2022'
        label="select your delivery date"
        value={((currdate?new Date().toISOString():value)||(tomorrowdate?tomorrow:value))}
        onChange={(newValue:any) => {

         { setcurrdate(false);
          settomorrowdate(false)}
          console.log(newValue)
     
          setValue(newValue);
         
         
        }}
        renderInput={(params:any) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Time"
          onChange={handleChange}
          sx={{marginLeft:"5px",width:'200px',color:"#000"}}
        >
          {
            statetime?.map((value:any)=>{
              return <MenuItem value={value?.time}>{value?.time}</MenuItem>
            })
    
          }
         
        </Select>
      </div>

      <div style={{display:"flex",margin:"10px"}} className="Processed Payment">
      <Button variant="contained" onClick={()=>{  navigate("../Payment")}
      
        }>Procced Payment</Button>
      </div>
      
    </div>
    </>
}
export default Booking;