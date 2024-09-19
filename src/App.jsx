import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer.jsx";
import Products from "./components/Products/Products.jsx";
import ServiceFolder from "./components/ServiceFolder/ServiceFolder.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FormInputProducts from "./components/AdminProducts/FormInputProducts.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute.jsx";
import { AuthContext } from "./Context/AuthContext.jsx";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div>
        <GoogleOAuthProvider clientId="115603747376-nns3nm0rf948p7ardj9ge7s6pohdlsl9.apps.googleusercontent.com">
          <AuthContext>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<ServiceFolder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <FormInputProducts />
                </ProtectedRoute>
                }/>
              <Route path="*" element={<Navigate to="/" />} />
              
            </Routes>
            <Footer />
          </AuthContext>
        </GoogleOAuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
