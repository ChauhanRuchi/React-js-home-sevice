import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <div
      style={{maxHeight:"500px" ,overflowY:"auto",paddingBottom:"40px"}}>
              <Outlet/>
      </div>
      <Footer />
    </>
  );
};
export default HomeLayout;
