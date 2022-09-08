import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { render } from "@testing-library/react";
import { NavLink } from "react-router-dom";
import "../../../Css/demo.css";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
export default function DrawerAppBar(props: Props, className = "back") {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HomeServiceProvider
      </Typography>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        style={{ backgroundColor: "#214758", color: "#efefef" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            HomeServiceProvider
          </Typography>
          <Box sx={{ height: "100%" }}>
            <NavLink
              to="/"
              className={"tab"}
              style={{
                margin: "10px",
                fontFamily: "",
                fontStyle: "normal",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/Service/:id"
              className={"tab"}
              style={{
                margin: "10px",
                fontFamily: "",
                fontStyle: "normal",
              }}
            >
              Service
            </NavLink>
            <NavLink
              to="/Login"
              className={"tab"}
              style={{
                margin: "10px",
                fontFamily: "",
                fontStyle: "normal",
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/Logout"
              className={"tab"}
              style={{
                margin: "10px",
                fontFamily: "",
                fontStyle: "normal",
              }}
            >
              Logout
            </NavLink>
            <NavLink
              to="/Register"
              className={"tab"}
              style={{
                margin: "10px",
                fontFamily: "",
                fontStyle: "normal",
              }}
            >
              Register
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
