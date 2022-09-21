import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import { subservice } from "../../../Redux/action/service";
import { getservice } from "../../../Redux/action/service";
import service from "../../../Redux/Reducer/service"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function BasicModal() {
  const state =useSelector((state: any) => state.service);
  let data="";
  
  const [service, setService] = React.useState('');
  var formData = new FormData();
  const dispatch = useDispatch<any>();
  const [open, setOpen] = React.useState(false);
  const [link, setlink] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    useEffect(()=>{
        dispatch(getservice)
    },[])

  const handleChange = (event: SelectChangeEvent) => {
    setService(event.target.value as string);
  };
  const formik = useFormik({
    initialValues: {
      data: "",
      SubService: "",
      Service: "",
      Decription: "",
      img_upload: "",
      Charge:"",
    
    },
    onSubmit: async(values:any) => {

      
      formData.append("image", values?.["file"]);
      
      formData.append("charge", values.Charge);
      formData.append("serviceid", service);

      formData.append("servicename", values.Service);

      formData.append("decription", values.Decription);
    
     await dispatch(subservice(formData));
    },
  });
  return (
    <div>
      
      <Button onClick={handleOpen} variant="contained" >
        + Add Service
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Add Service</Typography>
            <CloseIcon style={{ color: "red" }} onClick={() => handleClose()} />
          </div>

          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              spacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ padding: 1 }}
            >
              <Grid item xs={6}>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">MainService</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="SubService"
          onChange={handleChange}
          defaultValue={formik.values.data}        >
        {
          state?.mainservicedata?.map((item:any)=>{
           return <MenuItem value={item?._id}>
            {item?.servicename}</MenuItem>
          })
        
        }
        </Select>
      </FormControl>
    </Box>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="Service"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.data}
                  label="Service Name"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="Decription"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.data}
                  label="Decription"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                />{" "}
              </Grid>
              <Grid item xs={6}>
                <Stack>
                  <Button variant="contained" component="label">
                    Upload
                    <input
                      id="img_upload"
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      name="image"
                      value={link}
                      // onChange={formik.handleChange}
                      onChange={(event?: any) => {
                        formik.setFieldValue(
                          "file",
                          event.currentTarget.files[0] as EventTarget
                        );
                      }}
                      defaultValue={formik.values.data}
                    />
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={6}>
              <TextField
                  id="Charge"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.data}
                  label="Charge"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                />
                </Grid>
                <Grid>
                <Button
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
                </Grid>
              
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
