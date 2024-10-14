import React from "react";
import { Link,useLocation } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";

import "./Footer.scss";

const Footer = () => {
  const { login } = useContext(authContext);
  const location = useLocation();

  const footerClass = () => {
    switch (location.pathname) {
      case '/':
        return 'footerBack'; // Clase específica para la página de inici
      default:
        return 'footerContact'; // Clase por defecto para las demás páginas
    }
  };
  

  return (
    <>
      <section className={footerClass()}>
        <section className="footerContainer">
          <section className="upContainer">
            <div>
              <img
                className="logoFooter"
                src="../../img/imageedit_5_3141996671.gif"
                alt=""
              />
            </div>
            <div className="ulContainer">
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/products">
                  <li>Productos</li>
                </Link>
              </ul>
              <ul>
                <Link to="/services">
                  <li>Servicios</li>
                </Link>
                <Link to="/contact">
                  <li>Contacto</li>
                </Link>
              </ul>
              <ul>
                <li onClick={login}>Login</li>
              </ul>
            </div>
          </section>
          <section className="downContainer">
            <div className="newContainer">
              <div>
                <img src="../../img/location.png" alt="" />
                <p>Toledo Canelones 275 Bis.</p>
              </div>
              <div>
                <img
                  className="icoWatsapp"
                  src="../../img/WhatsAppFixed.png"
                  alt=""
                />
                <p>(+598) 094 588 350</p>
              </div>
              <div className="icoContainer">
                <Link to="https://www.instagram.com/fitogrowshop?igsh=YWVoMTV6bXJ5dHpi&utm_source=qr">
                  <img
                    className="icoInstagram"
                    src="../../img/Instagram.png"
                    alt=""
                  />
                </Link>
                <p>Instagram</p>
              </div>
            </div>
            <div>
              <iframe
                className="mapGoogle"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d819.7063518419042!2d-56.09673606511867!3d-34.73479499392743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ0JzA1LjMiUyA1NsKwMDUnNDMuOSJX!5e0!3m2!1ses!2suy!4v1725962197184!5m2!1ses!2suy"
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
