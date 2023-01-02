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
  deleteSubcategory,
  cleardeletesubcategoryState,
} from "../../../store/categorySlice";
import { useEffect } from "react";
import { useAppdispatch, useAppselector } from "../../../hooks";
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
  const dispatch =useAppdispatch();
  const servicestate = useAppselector((state) => state.category);

  useEffect(() => {
    dispatch(cleardeletesubcategoryState());
  }, [servicestate?.deletesubCategory?.delete]);
  
  function setdele(id: any) {
    dispatch(deleteSubcategory(id));
    dispatch(getsubcategoryall());
  }

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
            className="divdelete"
          >
            <CloseIcon
              className="closeicon"
              onClick={handleClose}
            />
            <CheckIcon
              className="checkicon"
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
