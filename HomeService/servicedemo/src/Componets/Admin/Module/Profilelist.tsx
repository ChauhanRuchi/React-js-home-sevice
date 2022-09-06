import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

export default function Profilelist() {
  const[open,setopen]=useState(false);
   
  return (<>
  {
    open==true &&(<List
    sx={{ width: "10%", maxWidth: 60, bgcolor: "background.paper"}}>
    {
  
      <ListItem
        key={1}
      >
        <ListItemText primary={`Line item ${1}`} />
      </ListItem>
  }
  </List>)
  }
 
    <IconButton
      color="inherit"
      onClick={(event) =>{
        setopen(true)}}
    >
      <AccountCircleIcon  />
    </IconButton>
    </>
  );
}
