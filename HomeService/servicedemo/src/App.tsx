import React from "react";
import Button from "@mui/material/Button";
import NavBar from "../src/Componets/Home/HomeLayout/NavBar";
import Login from "./Componets/Login";
import Register from "./Componets/Register";
import Home from "./Componets/Home";
import Service from "./Componets/Service/SubService";
import Profile from "./Componets/Admin/Profile/MainProfile"
import Logout from "../src/Componets/Home/HomeLayout/Logout";
import HomeLayout from "./Componets/Home/HomeLayout/HomeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashbordLayout from "./Componets/Admin/DashbordLayout/DashBordlayout";
import SubService from "./Componets/Admin/Service/SubService";
import ServiceCreate from "./Componets/Admin/Service/Service";
import Booking from "./Componets/Home/Booking/Booking";
import MainProfiile from "./Componets/Admin/Profile/MainProfile";
import Payment from "./Componets/Home/Payment/payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Logout" element={<Logout />} /> */}
            <Route path="/Register" element={<Register />} />
            <Route path="/Service/:id" element={<Service />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/Bookservice" element={<Booking/>}></Route>
            <Route path="Payment" element={<Payment/>}/>
          </Route>
          <Route path="/admin/Dashboard/" element={<DashbordLayout />}>
            <Route path="ServiceCreate" element={<SubService />} />
            <Route path="Service" element={<ServiceCreate/>} />
            <Route path="Profile" element={<MainProfiile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
