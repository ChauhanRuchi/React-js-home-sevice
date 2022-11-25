import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import service from '../../../store/Reducer/service';
import { getservice } from '../../../store/action/service';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

export default function FillterSidePanel() {
      const dispatch = useDispatch<any>();
      const servicestate = useSelector((state: any) => state.service);
    console.log(servicestate)

    useEffect(()=>{
          dispatch(getservice)
    },[])
 const [checked, setChecked] = React.useState([]);
  // const handleToggle = (value: string|"") => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];
  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };
    console.log("value....",checked)
  return (
    
    <Card sx={{ width: "40% ",marginLeft:"20px"}}>
      <CardContent>
        {
            
        }
        <div>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {servicestate?.mainservicedata?.map((value:any) => {
        const labelId = `checkbox-list-label-${value.servicename}`;

        return (
          <ListItem
            key={value.servicename}           
            disablePadding
          >
            {/* <ListItemButton role={undefined} onClick={handleToggle(value._id)} dense>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value._id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
            
              <ListItemText id={labelId} primary={value?.servicename} />
              
            </ListItemButton> */}
          </ListItem>
        );
      })}
    </List>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{width:"100%",marginLeft:"20px",marginRight:"20px",color:"white",backgroundColor:"black"}}>Aplly Fillter</Button>
      </CardActions>
    </Card>
  );
}