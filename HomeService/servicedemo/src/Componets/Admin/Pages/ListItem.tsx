import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { NavLink } from "react-router-dom";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import "../../../styles/demo.css"
export const mainListItems = (
  <React.Fragment>
      <NavLink to="./User" className="tab">
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="User" />
    </ListItemButton>
      </NavLink>

     <NavLink to="./Service" className="tab">
    <ListItemButton>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
     <ListItemText primary="Service" />
   
    </ListItemButton>
     </NavLink>

      <NavLink to="./ServiceCreate" className="tab">
    <ListItemButton>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
        <ListItemText primary="SubService" />
    </ListItemButton>
      </NavLink>
    
      <NavLink to="./Booking" className="tab">
    <ListItemButton>
      <ListItemIcon>
        <BookOnlineIcon />
      </ListItemIcon >
      <ListItemText primary="Booking" />
    </ListItemButton>
        </NavLink>
        

        <NavLink to="./City" className="tab">
    <ListItemButton>
      <ListItemIcon>
        <BookOnlineIcon />
      </ListItemIcon >
      <ListItemText primary="City" />
    </ListItemButton>
        </NavLink>
        
  </React.Fragment>
);


