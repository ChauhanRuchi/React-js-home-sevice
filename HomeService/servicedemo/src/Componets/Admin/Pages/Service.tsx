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
import {servicecre} from "../../../Redux/action/service"
import service from "../../../Redux/Reducer/service"


import { useSelector, useDispatch } from "react-redux";

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
export default function ServiceCreate() {
  const state = useSelector((state: any) => state.service);
  var formData = new FormData();
  const dispatch = useDispatch<any>();
  const [open, setOpen] = React.useState(false);
  const [link, setlink] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      data: "",
      SubService: "",
      Service: "",
      Decription: "",
      Admin: "",
      img_upload: "",
      Serviceid:"",
    },
    onSubmit: (values:any) => {
      formData.append("image", values?.["file"]);
    
      formData.append("servicename", values.Service);

      formData.append("decription", values.Decription);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      dispatch(servicecre(formData));    },
  });
  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        + Add Service
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">Add Service</Typography>

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
              <Button
                type="submit"
                variant="contained"
                style={{
                  margin: "20px",
                  display: "",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
