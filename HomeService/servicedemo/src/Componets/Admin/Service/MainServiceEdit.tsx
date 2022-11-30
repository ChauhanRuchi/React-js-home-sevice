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
import {
  editcategory,
  cleareditcategoryState,
} from "../../../store/categorySlice";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { __String } from "typescript";
import UploadFileIcon from "@mui/icons-material/UploadFile";

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
export default function MainServiceEdit(Props: any) {
  const state = useSelector((state: any) => state.category);

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
      Service: Props.servicename,
      Decription: Props.decription,
      Admin: "",
      img_upload: "",
      Serviceid: "",
    },
    onSubmit: (values: any) => {
      formData.append("image", values?.["file"]);

      formData.append("servicename", values.Service || Props.servicename);

      formData.append("decription", values.Decription || Props.decription);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      const data = { user: formData, id: Props?.id };
      dispatch(editcategory(data));
    },
  });
  React.useEffect(() => {
    if (state?.editCategory?.edit === true) handleClose();
    setTimeout(() => {
      dispatch(cleareditcategoryState());
    }, 2000);
  }, [state?.editCategory]);
  return (
    <div>
      <IconButton>
        <EditIcon onClick={handleOpen} />
      </IconButton>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Edit Service</Typography>
            <CloseIcon style={{ color: "red" }} onClick={() => handleClose()} />
          </div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="Service"
              onChange={formik.handleChange}
              defaultValue={Props.servicename}
              label="Service Name"
              fullWidth
              autoComplete="current-password"
              variant="filled"
              error={!!formik.errors.Service}
              helperText={formik && (formik?.errors?.Service as string)}
            />
            <TextField
              id="Decription"
              onChange={formik.handleChange}
              defaultValue={Props.decription}
              label="Decription"
              fullWidth
              autoComplete="current-password"
              variant="filled"
              error={!!formik.errors.Decription}
              helperText={formik.errors.Decription as string}
            />

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Stack style={{ width: "50%", margin: "10px" }}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ background: "#214758" }}
                >
                  {<UploadFileIcon />} Upload
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
                style={{ width: "50%", margin: "10px", background: "#214758" }}
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
