import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signup ,signin} from "../store/action/user";
import user from "../store/Reducer/user";

import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { stat } from "fs/promises";
import { useNavigate } from "react-router-dom";

// some code, then in the test I have:

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();
  const [currentemail, setemail] = useState("");
  const [currentpass, setpass] = useState("");
  const [showalert, setShowAlert] = useState(false);
  const statesigin = useSelector((state: any) => state.signin);

  const state1 = useSelector((state: any) => state?.signup);
  console.log("state111...", state1);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const dispatch = useDispatch<any>();
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  React.useEffect(()=>{
    localStorage.setItem("Token", state1?.data?.Token || "");
    if(statesigin?.data?.Token!=null){
      navigate("../")
    }
  },[statesigin])
      React.useEffect(()=>{
          if(state1?.signup==true){
            dispatch(
              signin({
                email: currentemail,
                password: currentpass,
              })
            );
          }
      },[state1])
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1,bgcolor: "#214758"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={currentemail}
                  onChange={(e: any) => setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  inputProps={{
                    maxLength:6,
                    }}
                  autoComplete="new-password"
                  value={currentpass}
                  onChange={(e: any) => setpass(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {showalert && state1?.data?.mes && (
              <Stack spacing={0} sx={{ width: "100%" }}>
                <Alert
                  severity="error"
                  style={{
                    backgroundColor: "#FF0000",
                  }}
                >
                  {state1?.data?.mes}
                </Alert>
              </Stack>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                marginTop: "20px",
                marginBottom: "8px",
                background: "#214758",
              }}
              onClick={() => {
                setShowAlert(true);
                dispatch(
                  signup({
                    email: currentemail,
                    password: currentpass,
                  })
                );
               
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item style={{marginBottom:"15px"}}>
                <Link
                  href="/Login"
                  variant="body2"
                  style={{ textDecorationColor: "#214758", color: "#214758" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
