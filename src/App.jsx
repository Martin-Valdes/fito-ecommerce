import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer.jsx";
import Products from "./components/Products/Products.jsx";
import ServiceFolder from "./components/ServiceFolder/ServiceFolder.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<ServiceFolder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
