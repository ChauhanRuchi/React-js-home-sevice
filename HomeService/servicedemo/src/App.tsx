import React from "react";
import Button from "@mui/material/Button";
import NavBar from "./componets/Home/HomeLayout/NavBar";
import Login from "./componets/Login";
import Register from "./componets/Register";
import Home from "./componets/Home";
import Service from "./componets/Service/SubService";
import Profile from "./componets/Admin/Profile/MainProfile";
import Logout from "./componets/Home/HomeLayout/Logout";
import HomeLayout from "./componets/Home/HomeLayout/HomeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashbordLayout from "./componets/Admin/DashbordLayout/Dashbord";
import SubService from "./componets/Admin/Service/SubService";
import ServiceCreate from "./componets/Admin/Service/Service";
import Booking from "./componets/Home/Booking/Booking";
import MainProfiile from "./componets/Admin/Profile/MainProfile";
import Payment from "./componets/Home/Payment/payment";
import User from "./componets/Admin/Profile/User";
import BookingData from "./componets/Admin/Booking/Booking";
import SubServiceAll from "./componets/Service/Subserviceall";
import UserProfile from "./componets/Home/Proflle/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<UserProfile/>} />
            <Route path="/SubServiceAll" element={<SubServiceAll />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Service/:id" element={<Service />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/Bookservice/:id" element={<Booking />}></Route>
            <Route path="Payment/:id" element={<Payment />} />
          </Route>
          <Route path="/admin/Dashboard" element={<DashbordLayout />}>
            <Route path="/admin/Dashboard" element={<User />} />
            <Route path="User" element={<User />} />
            <Route path="ServiceCreate" element={<SubService />} />
            <Route path="Service" element={<ServiceCreate />} />
            <Route path="Profile" element={<MainProfiile />} />
            <Route path="Booking" element={<BookingData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
