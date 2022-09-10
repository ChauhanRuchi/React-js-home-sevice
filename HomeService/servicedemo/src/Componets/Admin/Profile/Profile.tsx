import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Profile = () => {
  return<>
   <Box
      sx={{
        width: 500,
        height: 200,
      }}
    >
       <Typography variant="h5" gutterBottom style={{marginLeft:"10px"}}>
        AdminProfile
      </Typography>
      
    </Box>
  </>
};
export default Profile;
