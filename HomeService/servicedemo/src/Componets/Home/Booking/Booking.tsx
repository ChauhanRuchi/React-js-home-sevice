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
import { useNavigate,useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import {
  getcityname,
  gettime,
  CreBooking,
  getbookingdata,
} from "../../../Redux/action/booking";
import {
  getsubservicebyid
} from "../../../Redux/action/service";

import booking from "../../../Redux/Reducer/booking";
import { useSelector, useDispatch } from "react-redux";
import { NestCamWiredStandTwoTone } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "../../../Css/demo.css";
import Payment from "../Payment/payment"
import axios from "axios";
import { response } from "express";

declare global {
  interface Window {
      Razorpay: any;
     
  }}
const Booking = () => {
  let arrtime: any = [];
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [billingaddress, setbillingaddress] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const statecity = useSelector((state: any) => state.booking.getcityname);
  const statetime = useSelector((state: any) => state.booking.gettime);
  const statebook = useSelector((state: any) => state.booking.setbooking);
  const stategetbook = useSelector((state: any) => state.booking.getbooking);
  const statepayment=useSelector((state:any)=>state.booking.createsucess);
  const stateservice = useSelector((state: any) => state.service.getsubservicebyid);
  let { id } = useParams();


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
    dispatch(getbookingdata);
    dispatch(getsubservicebyid({_id:id}))
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
    formData.append("date", value);
    formData.append("time", time);
    formData.append("city", city);
    dispatch(CreBooking(formData));
   
  }
  stategetbook?.map((value: any) => {
    console.log("time..", value.time);
    return arrtime.push(value.time);
  });

  {
    console.log("arrtt", arrtime);
  }

  const handlepayment=async(charge:any)=>{
    const {data}=await axios.post("http://localhost:2009/HomeService/payment",{amount:charge})
        initpayment(data.data);
    console.log("data",data)
}
const initpayment=(data:any)=>{
        const option={
            key:"rzp_test_385yGikINhUWfh",
            amount:data?.amount ,
            currency:data?.currency,
            order_id:data?.id,
            handler:async(response:any)=>{
                try{
                    const verifyurl= "http://localhost:2009/HomeService/verify";
                      const {data}=await axios.post(verifyurl,response);
                      if(data.payment==true){
                        navigate("../Payment/"+id)
                      }
                  }
                  catch(error){
                      console.log("errppp...",error)
                  }
            }
        }
     
        const paymentObject = new window.Razorpay(option);
        paymentObject.open();
}

  useEffect(()=>{
    console.log("...",stateservice)
    if(statepayment==true)
    stateservice?.map((item:any)=>
      handlepayment(item?.charge)
    )
      
  },[statepayment])
  
  return (
    <>
     <Typography variant="h5" textAlign="center" margin={3}>
        Book The Service
      </Typography>
    
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}>
          <TextField
            id="outlined-basic"
            value={name}
            onChange={(e) => setname(e.target.value)}
            label="Enter Your Name"
            variant="outlined"
            sx={{
              width:"100%"
            }}
           
           
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            value={number}
            onChange={(e) => setnumber(e.target.value)}
            id="outlined-basic"
            label="Enter Your Contact Number"
            variant="outlined"
            sx={{ width: "100%" }}
            inputProps={{ maxLength: 13 }}
          />
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}>
        <TextField
          value={billingaddress}
          onChange={(e) => setbillingaddress(e.target.value)}
          id="outlined-basic"
          sx={{ width: "100%" }}
          label="Enter Your BillingAddresss"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} md={3}>
        <TextField
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          id="outlined-basic"
          sx={{ width: "100%"}}
          label="Enter Your DeliveryAddress"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}>
        <FormControl>
          <InputLabel id="city_select">City</InputLabel>
          <Select
            labelId="city_select"
            id="city_select"
            value={city}
            label="City"
            onChange={handleChangeCity}
            style={{ width: "315px" }}
          >
            {statecity?.map((item: any) => {
              return <MenuItem value={item?.name}>{item?.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
        <TextField
          style={{ width: "100%"}}
          defaultValue="Pincode"
        ></TextField>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
      <Typography variant="h5" textAlign="center" margin={2}>
        Choose Delivery Time
      </Typography>
      <div style={{ display: "flex" ,justifyContent:'center'}}>
        <Button
          variant="outlined"
          sx={{ width: "130px", margin: "5px" , "&.MuiButton-root": {
            border: "2px #214758 solid"
          },
          "&.MuiButton-text": {
            color: "grey"
          },
          "&.MuiButton-contained": {
            color: "yellow"
          },
          "&.MuiButton-outlined": {
            color: "#214758"
          }}}
          onClick={() => {
            settomorrowdate(false);
            setcurrdate(true);
          }}
        >
          Today
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "130px", margin: "5px" , "&.MuiButton-root": {
            border: "2px #214758 solid"
          },
          "&.MuiButton-text": {
            color: "grey"
          },
          "&.MuiButton-contained": {
            color: "yellow"
          },
          "&.MuiButton-outlined": {
            color: "#214758"
          }}}
          onClick={() => {
            settomorrowdate(true);
            setcurrdate(false);
          }}
        >
          Tommorow
        </Button>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="date"
            minDate={new Date().toISOString()}
            maxDate="12/31/2022"
            label="select your delivery date"
            value={
              currdate
                ? new Date().toISOString()
                : tomorrowdate
                ? tomorrow
                : value
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
        </Grid>
        <Grid item xs={12} md={3}>
        <FormControl>
          <InputLabel id="time_select">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            label="Time"
            onChange={handleChangeTime}
            sx={{ width: "315px", color: "#000" }}
          >
            {statetime?.map((value: any) => {
              return (
                <MenuItem
                  value={value?.time}
                  disabled={arrtime?.includes(value?.time)}
                >
                  {value?.time}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        </Grid>
        </Grid>
        <div style={{ display: "flex", margin: "15px" ,justifyContent:
      "center",flexDirection:"row"}}>
        
          <Typography sx={{color:"red"}}>{statebook}</Typography>
        </div>
      <div
        style={{ display: "flex", margin: "30px" ,justifyContent:
      "center",flexDirection:"row"}}
        className="Processed Payment"
      >
        <Button variant="contained" onClick={handleClick} style={{background:"#214758"}}>
          Procced Payment
        </Button>
      </div>
  
    </>
  );
};
export default Booking;
