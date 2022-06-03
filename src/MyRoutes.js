import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrudPage from "./pages/CrudPage";
import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
