import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import admin from "../../../store/Reducer/admin";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";


export default function MainProfiile(){
  const state = useSelector((state: any) => state.admin);

  return<>
  <Profile/>
  <ChangePassword/>
  {state?.changepassword && (
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }} >
          <Alert
            severity="success"
            color="info"
            style={{ color: "#fff", background: "#214758" }}
          >
            successfully change password
          </Alert>
        </div>
      )}
  </>
}