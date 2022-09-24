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
import { subservice,clearservicedatasub } from "../../../store/action/service";
import { getservice } from "../../../store/action/service";
import service from "../../../store/Reducer/service"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as Yup from "yup";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
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
  const ValidationSchema = Yup.object().shape({
    Service: Yup.string().required("Required"),
    Decription: Yup.string().required("Required"),
    Charge: Yup.string().required("Required"),
    // service:Yup.string().required("Required")
  });
  const formik = useFormik({
    validationSchema: ValidationSchema,
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
    
      dispatch(subservice(formData));
    },
  });
  React.useEffect(() => {
    if (state?.createsucesssub === true) {
      handleClose();

      setTimeout(()=>{
        dispatch(clearservicedatasub());
      },2000)
    }
  }, [state]);
  return (
   <>
        <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Button onClick={handleOpen} variant="contained" style={{background:"#214758"}} >
        + Add Service
      </Button>
      </div>
      
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{ display: "flex", justifyContent: "space-between" ,marginBottom:"20px"}}>
            <Typography variant="h6">Add Service</Typography>
            <CloseIcon style={{ color: "red" }} onClick={() => handleClose()} />
          </div>

          <form onSubmit={formik.handleSubmit}>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">MainService</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="SubService"
          onChange={handleChange}
          error={service==""?true:false}
          defaultValue={formik.values.data} >
        {
          state?.mainservicedata?.map((item:any)=>{
           return <MenuItem value={item?._id}>
            {item?.servicename}</MenuItem>
          })
        
        }
        </Select>
      </FormControl>
          </Box>
             <TextField
                  id="Service"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.data}
                  label="Service Name"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                  error={!!formik.errors.Service}
                  helperText={formik.errors.Service}
                />
                  <TextField
                  id="Decription"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.data}
                  label="Decription"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                  error={!!formik.errors.Decription}
                  helperText={formik.errors.Decription}
                />{" "}
                
                <TextField
                  id="Charge"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.data}
                  label="Charge"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                  error={!!formik.errors.Charge}
                  helperText={formik.errors.Charge}
                />
                 <div style={{display: "flex", justifyContent: "space-around"}}>
                 <Stack style={{width:"50%",margin:"10px"}}>
                  <Button variant="contained" component="label" style={{ background:"#214758"}}>
                  {  <UploadFileIcon/>} Upload 
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
                      <Button
                type="submit"
                variant="contained"
                style={{width:"50%",margin:"10px", background:"#214758"}}
              >
                Submit
              </Button>
                 </div>
                     
       
          </form>
        </Box>
      </Modal>
    </>
  );
}
