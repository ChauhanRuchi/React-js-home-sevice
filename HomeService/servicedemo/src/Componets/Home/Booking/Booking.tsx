import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "../../../styles/style.css";
import { useState, useEffect } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate, useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// import {
//   getcityname,
//   gettime,
//   CreBooking,
//   getbookingdata,
//   clearstatebooking,
// } from "../../../store/action/booking";
import {
  getcityname,
  gettime,
  createbooking,
  getbookingdata,
  clearState,
} from "../../../store/bookingSlice";
import { getsubcategorybyid } from "../../../store/categorySlice";
import { useAppdispatch,useAppselector} from "../../../hooks";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import "../../../styles/style.css";
import Payment from "../Payment/payment";
import axios from "axios";
import { response } from "express";
import Card from "@mui/material/Card";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import { createIntersectionTypeNode } from "typescript";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Booking = () => {
  let arrtime: string[] = [];
  const [city, setcity] = useState("");
  const statecity = useAppselector((state) => state.booking.getcityName);
  const statetime = useAppselector((state) => state.booking.getTime);
  const statebook = useAppselector((state) => state.booking.createBooking);
  const stategetbook = useAppselector(
    (state) => state.booking.getbookingData
  );
  const statepayment = useAppselector(
    (state) => state?.booking?.createBooking?.create
  );

  const stateservice = useAppselector(
    (state) => state.category.getsubcategorybyId
  );

  let { id } = useParams();

  const dispatch = useAppdispatch();
  let navigate = useNavigate();
  const today = new Date();
  const tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);

  tomorrow.toDateString();

  const [time, settime] = useState("");

  const [currdate, setcurrdate] = useState(false);
  const [tomorrowdate, settomorrowdate] = useState(false);

  const [datevalue, setValue] = useState<any>(null);
   useEffect(() => {
    dispatch(getcityname());
    dispatch(gettime());
    dispatch(getbookingdata());
    dispatch(getsubcategorybyid({ _id: id }));
  }, []);

  useEffect(() => {
    if (statepayment == true) {
      stateservice?.map((item: any) => handlepayment(item?.charge));
      dispatch(clearState());
    }
  }, [statepayment]);

  const handleChangeCity = (event: SelectChangeEvent) => {
    formik.setFieldValue("City", event.target.value);
    setcity(event.target.value as string);
  };
  const handleChangeTime = (event: SelectChangeEvent) => {
    formik.setFieldValue("Time", event.target.value);
    settime(event.target.value as string);
  };
 
  const ValidationSchema = Yup.object().shape({
    Name: Yup.string().required("Required"),
    ContactNumber: Yup.string().required("Required"),
    BillingAddress: Yup.string().required("Required"),
    DeliveryAddress: Yup.string().required("Required"),
    City: Yup.string().required("Required"),
    Time: Yup.string().required("Required"),
    Date: Yup.string().required("Required"),
  });

  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      Name: "",
      ContactNumber: "",
      BillingAddress: "",
      DeliveryAddress: "",
      City: "",
      Time: "",
      Date: "",
    },
    onSubmit: async (values: any) => {
      var formData = new FormData();
      stateservice?.map((item: any) => formData.append("charge", item?.charge));
      stateservice?.map((item: any) =>
        formData.append("servicename", item?.servicename)
      );
      formData.append("status", "Padding");
      formData.append("name", values?.Name);
      formData.append("number", values?.ContactNumber);
      formData.append("billingaddress", values?.BillingAddress);
      formData.append("deliveryadress", values?.DeliveryAddress);
      formData.append(
        "date",
        currdate
          ? new Date().toISOString()
          : tomorrowdate
          ? tomorrow
          : datevalue
      );
      formData.append("time", time);
      formData.append("city", city);
      dispatch(createbooking(formData));
    },
  });

  stategetbook?.map((value: any) => {
    return arrtime.push(value.time);
  });

  const handlepayment = async (charge: any) => {
    const { data } = await axios.post(
      "http://localhost:2009/HomeService/payment",
      { amount: charge }
    );
    initpayment(data.data);
    console.log("data", data);
  };

  const initpayment = (data: any) => {
    const option = {
      key: "rzp_test_385yGikINhUWfh",
      amount: data?.amount,
      currency: data?.currency,
      order_id: data?.id,
      handler: async (response: any) => {
        try {
          const verifyurl = "http://localhost:2009/HomeService/verify";
          const { data } = await axios.post(verifyurl, response);
          if (data.payment == true) {
            navigate("../Payment/" + statebook?.data?._id);
          }
        } catch (error) {
          console.log("errppp...", error);
        }
      },
    };

    const paymentObject = new window.Razorpay(option);
    paymentObject.open();
  };

  return (
    <>
      <Typography variant="h5" margin={3} textAlign="center">
        Book The Service
      </Typography>

      <Box width="100%" sx={{ textAlign: "-webkit-center" }}>
        <Box
          className="box"
        >
          <Card variant="outlined" className="divcard">
            {
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="Name"
                        onChange={formik.handleChange}
                        label="Enter Your Name"
                        error={!!formik.errors.Name}
                        helperText={formik.errors.Name}
                        variant="outlined"
                        sx={{
                          width: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        onChange={formik.handleChange}
                        error={!!formik.errors.ContactNumber}
                        helperText={formik.errors.ContactNumber}
                        id="ContactNumber"
                        label="Enter Your Contact Number"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        inputProps={{ maxLength: 10 }}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        onChange={formik.handleChange}
                        id="BillingAddress"
                        sx={{ width: "100%" }}
                        error={!!formik.errors.BillingAddress}
                        helperText={formik.errors.BillingAddress}
                        label="Enter Your BillingAddresss"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        onChange={formik.handleChange}
                        error={!!formik.errors.DeliveryAddress}
                        helperText={formik.errors.DeliveryAddress}
                        id="DeliveryAddress"
                        sx={{ width: "100%" }}
                        label="Enter Your DeliveryAddress"
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl style={{ width: "100%" }}>
                        <InputLabel id="city_select">City</InputLabel>
                        <Select
                          labelId="city_select"
                          id="city_select"
                          value={city}
                          error={!!formik.errors.City}
                          label="City"
                          onChange={handleChangeCity}
                        >
                          {statecity?.map((item: any) => {
                            return (
                              <MenuItem value={item?.pincode}>
                                {item?.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        style={{ width: "100%" }}
                        value={city}
                        error={!!formik.errors.City}
                        helperText={formik.errors.City}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                  </Grid>
                  <Typography variant="h5" textAlign="center" margin={2}>
                    Choose Delivery Time
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "46%",
                        margin: "5px",
                        "&.MuiButton-root": {
                          border: "2px #214758 solid",
                        },
                        "&.MuiButton-text": {
                          color: "grey",
                        },
                        "&.MuiButton-contained": {
                          color: "yellow",
                        },
                        "&.MuiButton-outlined": {
                          color: "#214758",
                        },
                      }}
                      onClick={() => {
                        formik.setFieldValue(
                          "Date",

                          new Date().toISOString()
                        );
                        settomorrowdate(false);
                        setcurrdate(true);
                      }}
                    >
                      Today
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "46%",
                        margin: "5px",
                        "&.MuiButton-root": {
                          border: "2px #214758 solid",
                        },
                        "&.MuiButton-text": {
                          color: "grey",
                        },
                        "&.MuiButton-contained": {
                          color: "yellow",
                        },
                        "&.MuiButton-outlined": {
                          color: "#214758",
                        },
                      }}
                      onClick={() => {
                        formik.setFieldValue("Date", tomorrow);
                        settomorrowdate(true);
                        setcurrdate(false);
                      }}
                      
                    >
                      Tommorow
                    </Button>
                  </div>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    marginTop={1}
                  >
                    <Grid item xs={12} md={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          className="date"
                          minDate={new Date().toISOString()}
                          maxDate="12/31/2023"
                          label="select your delivery date"
                          value={
                            currdate
                              ? new Date().toISOString()
                              : tomorrowdate
                              ? tomorrow
                              : datevalue
                          }
                          onChange={(newValue: any) => {
                            {
                              setcurrdate(false);
                              settomorrowdate(false);
                            }
                            formik.setFieldValue("Date", newValue);
                            setValue(newValue);
                          }}
                          renderInput={(params: any) => (
                            <TextField {...params} />
                          )}
                        />
                      </LocalizationProvider>
                      <Typography
                        style={{
                          color: "red",
                          textAlign: "left",
                          marginLeft: "12px",
                          fontSize: "12px",
                        }}
                      >
                        {!!formik.errors.Date ? "Required" : ""}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="time_select">Time</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={time}
                          label="Time"
                          error={!!formik.errors.Time}
                          onChange={handleChangeTime}
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
                  <div
                    className="divpayment"
                  >
                    <Button
                      variant="contained"
                      type="submit"
                      className="buttonpayment"
                    >
                      Procced Payment
                    </Button>
                  </div>
                </div>
              </form>
            }
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default Booking;
