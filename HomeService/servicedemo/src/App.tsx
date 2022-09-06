import React from "react";
import Button from "@mui/material/Button";
import NavBar from "../src/Componets/Home/HomeLayout/NavBar";
import Login from "./Componets/Login";
import Register from "./Componets/Register";
import Home from "./Componets/Home";
import Service from "./Componets/Service/Service";
import Logout from "../src/Componets/Home/HomeLayout/Logout";
import HomeLayout from "./Componets/Home/HomeLayout/HomeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashbordLayout from "./Componets/Admin/DashbordLayout/DashBordlayout";
import SubService from "./Componets/Admin/Pages/SubService";
import ServiceCreate from "./Componets/Admin/Pages/Service";
import Booking from "./Componets/Home/Booking/Booking";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/Login" element={<Login />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/" element={<Home />}></Route>
            <Route path="/Bookservice" element={<Booking/>}></Route>
          </Route>
          <Route path="/admin/Dashboard/" element={<DashbordLayout />}>
            <Route path="ServiceCreate" element={<SubService />} />
            <Route path="Service" element={<ServiceCreate/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
