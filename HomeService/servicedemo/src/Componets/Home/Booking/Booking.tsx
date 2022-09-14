import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "../../../Css/demo.css";
import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import {
  getcityname,
  gettime,
  CreBooking,
  getbookingdata
} from "../../../Redux/action/booking";
import booking from "../../../Redux/Reducer/booking";
import { useSelector, useDispatch } from "react-redux";
import { NestCamWiredStandTwoTone } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';

const Booking = () => {
  let arrtime:any=[];
  const [name,setname]=useState("");
  const [number,setnumber]=useState("");
  const [billingaddress,setbillingaddress]=useState("");
  const [address,setaddress]=useState("");
  const [city,setcity]=useState("");
  const statecity = useSelector((state: any) => state.booking.getcityname);
  const statetime = useSelector((state: any) => state.booking.gettime);
  const statebook = useSelector((state: any) => state.booking.setbooking);
  const stategetbook = useSelector((state: any) => state.booking.getbooking);

  console.log("statebook", stategetbook);

  const dispatch = useDispatch<any>();
  let navigate = useNavigate();
  const today = new Date();
  const tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);

  tomorrow.toDateString();

  const [time, settime] = useState("");

  const [currdate, setcurrdate] = useState(false);
  const [tomorrowdate, settomorrowdate] = useState(false);

  const [value, setValue] = useState<any>(null);

  const handleChangeCity = (event: SelectChangeEvent) => {
    setcity(event.target.value as string);
 
  };
  const handleChangeTime = (event: SelectChangeEvent) => {
   
    settime(event.target.value as string);
  };
  useEffect(() => {
    dispatch(getcityname);
    dispatch(gettime);
    dispatch(getbookingdata)
  }, []);
  {
    console.log("cuu", currdate);
  }

  function handleClick() {
    var formData = new FormData();

    formData.append("name", name);
    formData.append("number", number);
    formData.append("billingaddress", billingaddress);
    formData.append("deliveryadress", address);
    formData.append("date",value);
    formData.append("time", time);
    formData.append("city", city);
    dispatch(CreBooking(formData));
    navigate("../Payment");
  }

    stategetbook?.map((value:any)=>{
      console.log("time..",value.time)
       return arrtime.push(value.time);
    })
  
  {console.log("arrtt",arrtime)}

  return (
    <>
   
      <div className="bookingservice">
        <Typography variant="h5">Book The Service</Typography>
        <div className="User">
          <TextField
            id="outlined-basic"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            style={{ width: "300px", margin: "10px" }}
            label="Enter Your Name"
            variant="outlined"
          />
          <TextField
            value={number}
            onChange={(e)=>setnumber(e.target.value)}
            id="outlined-basic"
            style={{ width: "300px", margin: "10px" }}
            label="Enter Your Contact Number"
            variant="outlined"
          />
        </div>
        <div className="Address">
          <TextField
           value={billingaddress}
           onChange={(e)=>setbillingaddress(e.target.value)}
            id="outlined-basic"
            style={{ width: "300px", margin: "10px" }}
            label="Enter Your BillingAddresss"
            variant="outlined"
          />
          <TextField
          value={address}
          onChange={(e)=>setaddress(e.target.value)}
            id="outlined-basic"
            style={{ width: "300px", margin: "10px" }}
            label="Enter Your DeliveryAddress"
            variant="outlined"
          />
        </div>
        <div className="select">
        <FormControl fullWidth>
        <InputLabel id="city_select">City</InputLabel>
        <Select
            labelId="city_select"
            id="city_select"
            value={city}
            label="City"
            onChange={handleChangeCity}
            sx={{ marginLeft: "5px", width: "200px", color: "#000" }}
          >
            {statecity?.map((item: any) => {
              return <MenuItem value={item?.name}>{item?.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        </div>
        <Typography variant="h5" sx={{ margin: "10px" }}>
          Choose Delivery Time
        </Typography>
        <div style={{ display: "flex" }}>
          <Button
            variant="outlined"
            sx={{ width: "130px", margin: "5px" }}
            onClick={() => {
              settomorrowdate(false);
              setcurrdate(true);
            }}
          >
            Today
          </Button>
          <Button
            variant="outlined"
            sx={{ width: "130px", margin: "5px" }}
            onClick={() => {
              settomorrowdate(true);
              setcurrdate(false);
            }}
          >
            Tommorow
          </Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              minDate={new Date().toISOString()}
              maxDate="12/31/2022"
              label="select your delivery date"
              value={
                currdate?new Date().toISOString()
                :tomorrowdate ? tomorrow : value
              }
              onChange={(newValue: any) => {
                {
                  setcurrdate(false);
                  settomorrowdate(false);
                }
                console.log(newValue);

                setValue(newValue);
              }}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl fullWidth>
        <InputLabel id="time_select">Time</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            label="Time"
            onChange={handleChangeTime}
            sx={{ marginLeft: "5px", width: "200px", color: "#000" }}
          >
            {statetime?.map((value: any) => {
              return <MenuItem value={value?.time} disabled={arrtime?.includes(value?.time)}>{value?.time}</MenuItem>
            })}
          </Select>
        </FormControl>
        </div>

        <div
          style={{ display: "flex", margin: "10px" }}
          className="Processed Payment"
        >
          <Button variant="contained" onClick={handleClick}>
            Procced Payment
          </Button>
        </div>
      </div>
    </>
  );
};
export default Booking;
