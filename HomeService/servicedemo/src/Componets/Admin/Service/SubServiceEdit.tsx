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
import {editsubservice,getsubserviceall} from "../../../Redux/action/service"
import service from "../../../Redux/Reducer/service"
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import * as Yup from "yup";
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from "react-redux";
import { __String } from "typescript";

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
export default function MainServiceEdit(Props:any) {

  const state = useSelector((state: any) => state.service);

  var formData = new FormData();
  const dispatch = useDispatch<any>();
  const [open, setOpen] = React.useState(false);
  const [link, setlink] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ValidationSchema = Yup.object().shape({
    Service: Yup.string().required("Required"),
    Decription: Yup.string().required("Required"),
  });
  const formik = useFormik({
    validationSchema:ValidationSchema,
    initialValues: {
      data: "fg",
      SubService: "gg",
      Service:"jj",
      Decription: "gg",
      img_upload: "gg",
      Serviceid:"gg",
    },
    onSubmit: (values:any) => {
      formData.append("image", values?.["file"]);

      formData.append("servicename", values.Service);

      formData.append("decription", values.Decription);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      dispatch(editsubservice(Props.id,formData));
     },
  });
    React.useEffect(()=>{
        if(state?.editsucess===true)
        handleClose();
    },[state?.editsucess])
  return (
    <div>
       
     <IconButton>
           <EditIcon onClick={ handleOpen}/>
            </IconButton>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h6">Add Service</Typography>
          <CloseIcon style={{color:"red"}} onClick={()=>handleClose()}/>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              spacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              style={{ padding: 1 }}
            >             
              <Grid item xs={6}>
                <TextField
                  id="Service"
                  onChange={formik.handleChange}
                  defaultValue={Props.servicename}
                  label="Service Name"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                  error={!!formik.errors.Service}
                  helperText={formik.errors.Service}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="Decription"
                  onChange={formik.handleChange}
                  defaultValue={Props.decription}
                  label="Decription"
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                  error={!!formik.errors.Decription}
                  helperText={formik.errors.Decription}
                />{" "}
              </Grid>

             
            </Grid>
            <div style={{display:"flex",justifyContent:"space-between",margin:"20px"}}>
              <Stack>
                  <Button variant="contained" component="label" style={{width:"200px"}}>
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
                      defaultValue={Props.url}
                    />
                  </Button>
                </Stack>
              <Button
                type="submit"
                variant="contained"
                style={{width:"200px"}}
              >
                Submit
              </Button>
              </div>
            
          </form>
        </Box>
      </Modal>
    </div>
  );
}
