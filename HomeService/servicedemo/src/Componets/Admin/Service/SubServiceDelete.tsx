import * as React from "react";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getsubcategoryall,
  deletesubcategory,
  cleardeletesubcategoryState,
} from "../../../store/categorySlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SubServiceDelete(Props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch<any>();
  const servicestate = useSelector((state: any) => state.category);

  function setdele(id: any) {
    dispatch(deletesubcategory(id));
    dispatch(getsubcategoryall());
  }
  useEffect(() => {
    dispatch(cleardeletesubcategoryState());
  }, [servicestate?.deletesubCategory?.delete]);
  return (
    <div>
      <IconButton>
        <DeleteIcon onClick={handleOpen} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Are you sure delete?
          </Typography>
          <div
            style={{
              display: "flex",
              margin: "20px",
              justifyContent: "space-around",
            }}
          >
            <CloseIcon
              style={{ background: "red", width: "33%", height: "30px" }}
              onClick={handleClose}
            />
            <CheckIcon
              style={{ background: "#008000", width: "33%", height: "30px" }}
              onClick={() => {
                return (
                  <>
                    {setdele(Props.id)}
                    {handleClose()}
                  </>
                );
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
