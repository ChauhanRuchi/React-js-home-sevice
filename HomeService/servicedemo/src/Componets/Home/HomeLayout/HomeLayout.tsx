import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <div
      className="divhomelayout">
              <Outlet/>
      </div>
      <Footer />
    </>
  );
};
export default HomeLayout;
