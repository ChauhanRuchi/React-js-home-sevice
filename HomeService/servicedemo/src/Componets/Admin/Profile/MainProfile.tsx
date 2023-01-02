import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import {useAppselector} from "../../../hooks";
import Alert from "@mui/material/Alert";

export default function MainProfiile() {
  const adminstate = useAppselector((state) => state.admin);

  return (
    <>
      <Profile />
      <ChangePassword />
      {adminstate?.changepassword && (
        <div
          className="addbutton"
        >
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
  );
}
