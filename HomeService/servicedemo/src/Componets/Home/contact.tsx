import { Typography } from "@mui/material";
import { getcategory } from "../../store/categorySlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function ContactUs() {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getcategory);
  }, []);
  return (
    <>
      <Typography style={{ fontWeight: "700" }}>Contact us</Typography>
    </>
  );
}
export default ContactUs;
