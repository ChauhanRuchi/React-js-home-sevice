import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;
