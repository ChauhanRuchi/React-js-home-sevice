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
import { getservice, servicecre,clearservicedata } from "../../../store/action/service";
import service from "../../../store/Reducer/service";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import LoadingButton from '@mui/lab/LoadingButton';


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:" 40%",
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
export default function MainService() {
  const state = useSelector((state: any) => state.service);
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
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
    validationSchema: ValidationSchema,
    initialValues: {
      data: "",
      SubService: "",
      Service: "",
      Decription: "",
      Admin: "",
      img_upload: "",
      Serviceid: "",
    },
    onSubmit: async (values: any) => {
      formData.append("image", values?.["file"]);

      formData.append("servicename", values.Service);

      formData.append("decription", values.Decription);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      dispatch(servicecre(formData));
    },
  });

  React.useEffect(() => {
    if (state?.createsucess === true) {
     
      handleClose();

      setTimeout(()=>{
       dispatch(clearservicedata())
      },2000)
    }
  }, [state]);

 
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Button onClick={handleOpen} variant="contained" style={{background:"#214758"}}>
          + Add Service
        </Button>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Add Service</Typography>
            <CloseIcon style={{ color: "red" }} onClick={() => handleClose()} />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div  style={{  justifyContent: "center" ,width:"100%",textAlign:"center"}}>
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
                  style={{marginBottom:"15px"}}
                  fullWidth
                  autoComplete="current-password"
                  variant="filled"
                  error={!!formik.errors.Decription}
                  helperText={formik.errors.Decription}
                />{" "}
                 <div style={{display: "flex", justifyContent: "space-around"}}>
                 <Stack style={{width:"50%",margin:"10px"}}>
                   
                   <Button 
                   variant="contained" component="label" style={{background:"#214758"}} >
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
                     >
                     
                     </input>
                   </Button>
                 </Stack>
                 <LoadingButton
                type="submit"
                variant="contained"
                style={{
                  width:"50%",
                  margin:"10px" ,
                  background:"#214758"
                }}
              >
                Submit
              </LoadingButton>
</div>
            
                
            </div>
         
   
          </form>
        </Box>
      </Modal>
    </>
  );
}
