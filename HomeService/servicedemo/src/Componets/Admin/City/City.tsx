import UserTable from "./CityTable";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import { clearcityState, setcitydata } from "../../../store/bookingSlice";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";
import {useAppdispatch,useAppselector} from "../../../hooks"
import UploadFileIcon from "@mui/icons-material/UploadFile";
import LoadingButton from "@mui/lab/LoadingButton";
import "../../../styles/style.css"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: " 40%",
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
export default function CityData() {
  const bookingstate = useAppselector((state) => state.booking);

  var formData = new FormData();
  const dispatch = useAppdispatch();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (bookingstate?.setcityData?.create === true) {
      handleClose();

      setTimeout(() => {
        dispatch(clearcityState());
      }, 2000);
    }
  }, [bookingstate?.setcityData]);

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
      formData.append("name", values.Service);

      formData.append("pincode", values.Decription);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      dispatch(setcitydata(formData));
    },
  });

  return (
    <>
      <div
      className="addbutton"
      >
        <Button
          onClick={handleOpen}
          variant="contained"
          style={{ background: "#214758" }}
        >
          + Add City
        </Button>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="diviconwithtitle">
            <Typography variant="h6">Add City</Typography>
            <CloseIcon style={{ color: "red" }} onClick={() => handleClose()} />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div
              style={{
                justifyContent: "center",
                width: "100%",
                textAlign: "center",
              }}
            >
              <TextField
                id="Service"
                onChange={formik.handleChange}
                defaultValue={formik.values.data}
                label="City Name"
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
                label="Pincode"
                style={{ marginBottom: "15px" }}
                fullWidth
                autoComplete="current-password"
                variant="filled"
                error={!!formik.errors.Decription}
                helperText={formik.errors.Decription}
              />{" "}
              <div className="divuploadbutton">
                <Button
                  type="submit"
                  variant="contained"
                 className="submitbutton"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
      <UserTable />
    </>
  );
}
