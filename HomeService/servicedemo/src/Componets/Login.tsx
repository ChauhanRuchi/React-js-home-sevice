import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signin } from "../store/action/user";
import user from "../store/Reducer/user";
import admin from "../store/Reducer/admin"
import { adminlogin } from "../store/action/admin";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import "../Css/demo.css";
//tab selection
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BorderColor } from "@mui/icons-material";

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

export default function Login() {
  localStorage.removeItem("Token");

  let navigate = useNavigate();
  const state1 = useSelector((state: any) => state.signin);
  console.log("...",localStorage.getItem("Token"));
  const adminstate = useSelector((state: any) => state.admin);

  console.log("adminstate", adminstate);
  React.useEffect(() => {
    if (adminstate?.data?.login == true) {
      navigate("/admin/Dashboard");
    }
  }, [adminstate]);

    React.useEffect(()=>{
      localStorage.setItem("Token", state1?.data?.Token || "");
      if(state1?.data?.Token!=null){
        navigate("../")
      }
    },[state1])
    React.useEffect(()=>{
       localStorage.setItem("AdminToken", adminstate?.data?.Token || "");
    },[adminstate])
  const [currentemail, setemail] = useState("");
  const [currentpass, setpass] = useState("");
  // Tab Changed
  const [userType, setUserType] = React.useState("User");
  const [tabIndex, setTabIndex] = React.useState<Number>(0);
  const dispatch = useDispatch<any>();

  const [showalert, setShowAlert] = useState(false);
  const [showalert1, setShowAlert1] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
 

  const handleChangeUserType = (event: any, newTabIndex: Number) => {
    if (newTabIndex === 0) {
      setUserType("User");
    }

    if (newTabIndex === 1) {
      setUserType("Admin");
    }

    setTabIndex(newTabIndex);
  };

  const tabStyle = {
    default_tab: {
      color: "",
      fontSize: 15,
    },
    active_tab: {
      color: "#214758",
      fontSize: 15,
    },
  };
  let getStyle = (isActive: any) => {
    return isActive ? tabStyle.active_tab : tabStyle.default_tab;
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="LoginTitle"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {
              <Tabs
                value={tabIndex}
                onChange={handleChangeUserType}
                centered
                variant="fullWidth"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#214758",
                  },
                }}
              >
                <Tab label="User" style={getStyle(userType === "User")} />
                <Tab label="Admin" style={getStyle(userType === "Admin")} />
              </Tabs>
            }
          </div>

          <Avatar sx={{ m: 1, bgcolor: "#214758" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "#214758" }}>
            {userType} Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{
                style: { borderColor: "#214758" },
              }}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={currentemail}
              onChange={(e: any) => setemail(e.target.value)}
              // className="cm-input input.mui-focused "
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              inputProps={{
                maxLength:6,
                }}
              autoComplete="current-password"
              value={currentpass}
              onChange={(e: any) => setpass(e.target.value)}
            />
            <FormControlLabel
              style={{
                color: "#214758",
              }}
              control={
                <Checkbox
                  value="remember"
                  style={{
                    color: "#214758",
                  }}
                />
              }
              label="Remember me"
            />
            {showalert && (state1?.data?.mes || adminstate?.data?.mes) && (
              <Stack spacing={0} sx={{ width: "100%" }}>
                <Alert
                  severity="error"
                  style={{
                    backgroundColor: "#FF0000",
                  }}
                >
                  {state1?.data?.mes || adminstate?.data?.mes}
                </Alert>
              </Stack>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                marginTop: "20px",
                marginBottom: "8px",
                background: "#214758",
              }}
              onClick={() => {
                setShowAlert(true);
                setShowAlert1(true);

                if (userType == "User")            
                  dispatch(
                    signin({
                      email: currentemail,
                      password: currentpass,
                    })                    
                  );
                 
                else {
                  dispatch(
                    adminlogin({
                      email: currentemail,
                      password: currentpass,
                    })
                  );
                }
            
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link
                  href="#/"
                  variant="body2"
                  style={{ textDecorationColor: "#214758", color: "#214758" }}
                >
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item style={{marginBottom:"15px"}}>
                <Link
                  href="/Register"
                  variant="body2"
                  style={{ textDecorationColor: "#214758", color: "#214758" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
