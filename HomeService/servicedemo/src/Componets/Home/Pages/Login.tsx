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
import { useSelector, useDispatch } from "react-redux";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signin } from "../../../Redux/action/signup";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import "../../../Css/demo.css";

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
  const state1 = useSelector((state: any) => state.signin);
  const [currentemail, setemail] = useState("");
  const [currentpass, setpass] = useState("");
  const dispatch = useDispatch<any>();
  const [showalert, setShowAlert] = useState(false);
  localStorage.setItem("Token", state1?.data?.Token || "");
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
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
            <Typography
              component="h1"
              variant="h5"
              style={{ marginRight: "40px", color: "#214758" }}
            >
              User
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginLeft: "40px", color: "#214758" }}
            >
              Admin
            </Typography>
          </div>

          <Avatar sx={{ m: 1, bgcolor: "#214758" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "#214758" }}>
            Sign in
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
                style: { fontFamily: "nunito", borderColor: "#214758" },
              }}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={currentemail}
              onChange={(e: any) => setemail(e.target.value)}
              className="cm-input input.mui-focused "
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
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
              style={{
                marginTop: "20px",
                marginBottom: "8px",
                background: "#214758",
              }}
              onClick={() => {
                setShowAlert(true);
                dispatch(
                  signin({
                    email: currentemail,
                    password: currentpass,
                  })
                );
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  style={{ textDecorationColor: "#214758", color: "#214758" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  style={{ textDecorationColor: "#214758", color: "#214758" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
