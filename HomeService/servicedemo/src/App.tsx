import React from "react";
import Button from "@mui/material/Button";
import NavBar from "../src/Componets/Home/HomeLayout/NavBar";
import Login from "../src/Componets/Home/Pages/Login";
import Register from "../src/Componets/Home/Pages/Register";
import Home from "../src/Componets/Home/Pages/Home";
import Service from "../src/Componets/Home/Pages/Service";
import Logout from "../src/Componets/Home/HomeLayout/Logout";
import HomeLayout from "./Componets/Home/HomeLayout/HomeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
