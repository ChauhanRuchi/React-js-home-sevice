
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import user from "../../../store/Reducer/user";
import { logout } from "../../../store/action/user";
import { useSelector, useDispatch } from "react-redux";
import { isNullOrUndefined } from "util";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const pages = ["HOME", "SERVICE", "LOGIN"];
const settings = ["Profile","Logout"];

const ResponsiveAppBar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function userprofilr() {
    if (localStorage.getItem("Token")) {
      return (
        <>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  if (setting=="Logout") {
                    dispatch(logout());
                    localStorage.removeItem("Token");
                    if (localStorage.getItem("Token") == null)
                      handleCloseUserMenu();

                    navigate("../");
                  }
                  else if(setting=="Profile"){
                    navigate("../Profile")
                  }
                  
                }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      );
    }
  }
  return (
    <AppBar position="static" style={{ background: "#214758" }} elevation={0}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MiscellaneousServicesIcon sx={{ display: { xs: "none", md: "flex",fontSize:"40px" }, mr: 1 }} />
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HomeService
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                if (localStorage.getItem("Token") && page == "LOGIN") {
                  return;
                }
                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button
                      onClick={(x) => {
                        console.log("tab...", page);
                        if (page == "HOME") {
                          return navigate("/");
                        } else if (page == "LOGIN") {
                          console.log("...", localStorage.getItem("Token"));
                          if (
                            localStorage.getItem("Token") == "" ||
                            localStorage.getItem("Token") == undefined
                          ) {
                            return navigate("/Login");
                          } else {
                            return navigate("/");
                          }
                        } else if (page == "SERVICE") {
                          return navigate("/SubServiceAll");
                        }
                      }}
                    >
                      {page}
                    </Button>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HomeService
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => {
              if (localStorage.getItem("Token") && page == "LOGIN") {
                return;
              }
              return (
                <Button
                  key={page}
                  onClick={(x) => {
                    console.log("tab...", page);
                    if (page == "HOME") {
                      return navigate("/");
                    } else if (page == "LOGIN") {
                      console.log("...", localStorage.getItem("Token"));
                      if (
                        localStorage.getItem("Token") == "" ||
                        localStorage.getItem("Token") == undefined
                      ) {
                        return navigate("/Login");
                      } else {
                        return navigate("/");
                      }
                    } else if (page == "SERVICE") {
                      return navigate("/SubServiceAll");
                    }
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>{userprofilr()}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
