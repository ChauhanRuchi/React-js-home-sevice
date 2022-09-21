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
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <NavLink to="./User">
      <ListItemText primary="User" />
      </NavLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
     <NavLink to="./Service">
     <ListItemText primary="Service" />
     </NavLink>
   
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MiscellaneousServicesIcon />
      </ListItemIcon>
      <NavLink to="./ServiceCreate">
        <ListItemText primary="SubService" />
      </NavLink>
    </ListItemButton>
    
    <ListItemButton>
      <ListItemIcon>
        <BookOnlineIcon />
      </ListItemIcon>
      <ListItemText primary="Booking" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" onClick={(x) => {}} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
