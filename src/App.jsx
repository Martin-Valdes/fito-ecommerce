import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer.jsx";
import Products from "./components/Products/Products.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Services from "./components/ServicesComponent/Services.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import CheckOut from "./components/CheckOut/CheckOut.jsx";
import FormInputProducts from "./components/AdminProducts/FormInputProducts.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute.jsx";
import { AuthContext } from "./Context/AuthContext.jsx";
import { ReqFirebase } from "./Context/ReqFirebase.jsx";
import { ProductDetail } from "./components/ProductsDetail/ProductDetail.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import { EditProduct } from "./components/AdminProducts/EditProduct.jsx";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <GoogleOAuthProvider clientId="115603747376-nns3nm0rf948p7ardj9ge7s6pohdlsl9.apps.googleusercontent.com">
          <AuthContext>
            <ScrollToTop />
            <CartProvider>
              <ReqFirebase>
                <NavBar />
                <Routes>
                  <Route path="/" element={<HomeContainer />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />

                  <Route
                    path="/productDetail/:id"
                    element={<ProductDetail />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/categoryFilter/:category"
                    element={<CategoryFilter />}
                  />
                  <Route path="/checkout" element={<CheckOut />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <FormInputProducts />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/editProduct/:id"
                    element={
                      <ProtectedRoute>
                        <EditProduct />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
              </ReqFirebase>
            </CartProvider>
          </AuthContext>
        </GoogleOAuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
