import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppselector, useAppdispatch } from "../../../hooks";
import { getbookingdatabyid, statusupdate } from "../../../store/bookingSlice";
import { CardMedia } from "@mui/material";
import "../../../styles/style.css";

export default function Payment() {
  let { id } = useParams();
  var formData = new FormData();
  formData.append("status", "Completed");
  const dispatch = useAppdispatch();
  const statebooking = useAppselector(
    (state) => state.booking.getbookingdatabyId
  );
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          className="paymenttitle"
          color="text.secondary"
          gutterBottom
        >
          Your Order has been confirmed and will be provide service soon
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginRight: "5px" }}>
            <Typography color="text.secondary" gutterBottom>
              orderdate
            </Typography>
            <Typography gutterBottom>
              {new Date().toISOString().substring(0, 10)}
            </Typography>
          </div>
          <div>
            <Typography color="text.secondary" gutterBottom>
              ordertime
            </Typography>
            <Typography gutterBottom>
              {new Date().toLocaleTimeString()}
            </Typography>
          </div>
        </div>
        <div>
          {statebooking?.map((item: any) => {
            return (
              <>
                <div
                 className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>NAME :</Typography>
                  <Typography marginLeft="3px">{item?.name}</Typography>
                </div>
                <div
                  className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>
                    CONTACT NUMBER :
                  </Typography>
                  <Typography marginLeft="3px">
                    {item?.contactnumber}
                  </Typography>
                </div>
                <div
                  className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>
                    BILLING ADDRESS :
                  </Typography>
                  <Typography marginLeft="3px">
                    {item?.billingaddress}
                  </Typography>
                </div>
                <div
                 className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>
                    DELIVERY ADDRESS :
                  </Typography>
                  <Typography marginLeft="3px">
                    {item?.deliveryadress}
                  </Typography>
                </div>
                <div
                 className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>
                    SERVICE NAME :
                  </Typography>
                  <Typography marginLeft="3px">{item?.servicename}</Typography>
                </div>
                <div
                  className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>
                    SERVICE CHARGE :
                  </Typography>
                  <Typography marginLeft="3px">{item?.charge}</Typography>
                </div>
                <div
                  className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>DATE :</Typography>
                  <Typography marginLeft="3px">{item?.date}</Typography>
                </div>
                <div
                  style={{
                    margin: "10px",
                    display: "flex",
                    justifyContent: "left",
                  }}
                >
                  <Typography sx={{ fontWeight: "700" }}>TIME :</Typography>
                  <Typography marginLeft="3px">{item?.time}</Typography>
                </div>
                <div
                 className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>PINCODE :</Typography>
                  <Typography marginLeft="3px">{item?.city} </Typography>
                </div>
                <div
                 className="divname"
                >
                  <Typography sx={{ fontWeight: "700" }}>TOTAL :</Typography>
                  <Typography marginLeft="3px">{item?.charge}</Typography>
                </div>
              </>
            );
          })}
        </div>
      </CardContent>
      <CardActions></CardActions>
    </React.Fragment>
  );
  const bull = (
    <Box
      component="span"
      sx={{ display: "inlineblock", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  let data = { user: formData, id: id };
  useEffect(() => {
    dispatch(getbookingdatabyid(id));
    dispatch(statusupdate(data));
  }, []);
  return (
    <>
      <Typography
        variant="h4"
        className="ordersummary"
      >
        OrderSummary
      </Typography>
      <Box
       className="boxpayment"
      >
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}
