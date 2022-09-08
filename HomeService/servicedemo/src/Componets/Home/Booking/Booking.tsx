import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import "../../../Css/demo.css"
const Booking=()=>{
    let date=new Date()

    return <>
    <div className='bookingservice'>
    <Typography variant="h5" >
     Book The Service
      </Typography>
       <TextField id="outlined-basic" style={{width:"400px",marginTop:"20px"}} label="Enter Your Address" variant="outlined" />
       <Button variant="contained" style={{width:"600px",marginTop:"20px",background:"#214758"}}>As Soon as Possible</Button>
       <Button variant="contained" style={{width:"600px",marginTop:"20px",background:"#214758"}}>Schedule an Order</Button>
       <Card  sx={{ minWidth: 275 }}>
        <CardContent>
        <TextField id="outlined-basic" label="Enter Your Address" variant="outlined" />
        </CardContent>
       </Card>
       <Typography variant="h6" style={{marginTop:"15px"}}>
    Requested Service on
      </Typography>
      <Typography variant="h6" style={{marginTop:"25px"}}>{date.toUTCString()}</Typography>
    </div>
    </>
}
export default Booking;