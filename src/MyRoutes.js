import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import CrudPage from "./pages/CrudPage";
import MainPage from "./pages/MainPage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/crud" element={<CrudPage />} />
        <Route path="/add" element={<AddPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
