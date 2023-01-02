import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useAppdispatch, useAppselector } from "../hooks";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userSignin } from "../store/authSlice";
import { adminlogin } from "../store/adminSlice";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
//tab selection
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Bool } from "reselect/es/types";

const theme = createTheme();

export default function Login() {
  localStorage.removeItem("Token");

  let navigate = useNavigate();
  const userstate = useAppselector((state) => state.userdata?.userData);
  const adminstate = useAppselector((state) => state?.admin?.adminData);

  React.useEffect(() => {
    if (adminstate?.login == true) {
      navigate("/admin/Dashboard");
    }
  }, [adminstate]);
  React.useEffect(() => {
    localStorage.setItem("Token", userstate?.Token || "");
    if (userstate?.Token != null) {
      navigate("../");
    }
  }, [userstate]);
  React.useEffect(() => {
    localStorage.setItem("AdminToken", adminstate?.Token || "");
  }, [adminstate]);

  const [currentemail, setemail] = useState("");
  const [currentpass, setpass] = useState("");
  // Tab Changed
  const [userType, setUserType] = React.useState<string>("User");
  const [tabIndex, setTabIndex] = React.useState<Number>(0);
  const dispatch = useAppdispatch();

  const [showalertuser, setShowAlertUser] = useState(false);
  const [, setShowAlert] = useState(false);

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

  const handleChangeUserType = (_: any, newTabIndex: Number) => {
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
  let getStyle = (isActive: Boolean) => {
    return isActive ? tabStyle.active_tab : tabStyle.default_tab;
  };
  let data = {
    email: currentemail,
    password: currentpass,
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

          <Avatar sx={{ m: 1, bgcolor: "#214758" }}></Avatar>
          <Typography component="h1" variant="h5" className="UserType">
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setemail(e.target.value)
              }
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
                maxLength: 6,
              }}
              autoComplete="current-password"
              value={currentpass}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setpass(e.target.value)
              }
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
            {showalertuser && (userstate?.mes || adminstate?.mes) && (
              <Stack spacing={0} sx={{ width: "100%" }}>
                <Alert
                  severity="error"
                  style={{
                    backgroundColor: "#FF0000",
                  }}
                >
                  {userstate?.mes || adminstate?.mes}
                </Alert>
              </Stack>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="signinbutton"
              onClick={() => {
                setShowAlertUser(true);
                setShowAlert(true);

                if (userType == "User")
                  dispatch(
                    userSignin({
                      email: currentemail,
                      password: currentpass,
                    })
                  );
                else {
                  dispatch(adminlogin(data));
                }
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item style={{ marginBottom: "15px" }}>
                <Link href="/Register" variant="body2" className="signuplink">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
