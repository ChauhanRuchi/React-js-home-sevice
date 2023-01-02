import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "../../../styles/style.css"

// Grid
import Grid from "@mui/material/Grid";

const theme = createTheme({
  typography: {
    fontFamily: "unset",
  },
});

export default function Footer() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={2}
          className="footer"
          mt={0}
          p={2}
        
        >
          <Grid item xs={12} md={4}>
            <Typography variant="body1" component="h2">
              Our Story
            </Typography>
            <Divider color="#ffffff" />
            <br />
            <Typography variant="body2">
              HomeService Provide all service online booking.
            </Typography>
            <br />
            <Typography variant="body2">
              we are provide Medical service,Car Service,Laundary Service,All other service and booking and listing
              user can see alll service and booking and payment..
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" component="h2">
              Address & Contact
            </Typography>
            <Divider color="#ffffff" />
            <br />
            <Typography variant="body2">
              35/34, Canal road shai thirth palnpore patia
            </Typography>
            <Typography variant="body2">City/Town : Surat</Typography>
            <Typography variant="body2">State : Gujarat</Typography>
            <Typography variant="body2">
              Phone Number : +91 9574579523
            </Typography>
            <Typography variant="body2">
              Email : HomeService@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" component="h2">
              Useful Links
            </Typography>
            <Divider color="#ffffff" />
            <br />
            <Typography variant="body2">Service</Typography>
            <Typography variant="body2">Booking</Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="body1" component="h2">
              Social Media
            </Typography>
            <Divider color="#ffffff" />
            <br />
            <Typography variant="body2">
              <InstagramIcon /> <FacebookIcon /> <YouTubeIcon />{" "}
              <PinterestIcon />
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="body2"
              component="h2"
              sx={{ textAlign: "center", fontFamily: "unset" }}
            >
              TERMS OF USE © 2022 | www.HomeService.com | ALL RIGHTS RESERVED
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
