import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage/Index";
import MainServices from "./Services/MainServices";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        </Route>
        <Route path="/services" element={<Layout />}>
        <Route index element={<MainServices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
