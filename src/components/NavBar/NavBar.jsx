import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import CartWidget from "./CartWidget";

import "./NavBar.scss";

const NavBar = () => {
  const { login, logout, user } = useContext(authContext);
  const navbarCollapseRef = useRef(null);

  const closeNavbar = () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
      bsCollapse.hide();
    }
  };

  return (
    <>
      <div className="navBarContainer">
        <section className="navBarContainer navbar navbar-expand-lg navbar-light bg-light">
          <div className="containerLogo navbar-brand">
            <Link to="/">
              <img
                className="logoNav"
                src="../../img/imageedit_5_3141996671.gif"
                alt=""
              />
            </Link>
          </div>
          <button
            className="btnColapse navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="btnIco navbar-toggler-icon"></span>
          </button>
          <nav className="navContainer collapse navbar-collapse" id="navbarNav">
            <ul className="ulLinks navbar-nav">
              <li className="liLinks nav-item ">
                <Link className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="liLinks nav-item">
                <Link className="nav-link" to="/products" onClick={closeNavbar}>
                  Productos
                </Link>
              </li>
              <li className="liLinks nav-item">
                <Link className="nav-link" to="/services" onClick={closeNavbar}>
                  Servicios
                </Link>
              </li>
              <li className="liLinks nav-item">
                <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                  Contacto
                </Link>
              </li>
            </ul>
            <section className="loginContainer">
              <ul className="ulLogin">
                <li onClick={login} className="liLogin">
                  Login
                </li>
                <li
                  onClick={logout}
                  className={user ? "liLogin" : "liLoginFalse"}
                >
                  Logout
                </li>
              </ul>
              <div className="adminContainer nav-item">
                {user.data && user.data.email === "fitogrowshop23@gmail.com" ? (
                  <Link to="/admin">ADMIN</Link>
                ) : null}

                {user ? (
                  <>
                    <img
                      className={user ? "loginTrue" : "loginFalse"}
                      src={
                        user.data
                          ? user.data.picture
                          : "../../img/defaultAvatar.png"
                      }
                      alt=""
                    />
                  </>
                ) : null}
              </div>
              <div className="iconContainer nav-item">
                <Link to="https://www.instagram.com/fitogrowshop?igsh=YWVoMTV6bXJ5dHpi&utm_source=qr">
                  <img
                    id="iconSocial"
                    className="iconSocial"
                    src="../../img/Instagram.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="imgCartContainer nav-item ">
                <CartWidget params={closeNavbar} />
              </div>
            </section>
          </nav>
        </section>
        <div className="iconWhatsappContainer">
          <Link to="https://wa.me/59894588350?text=Hola%2C%20estoy%20interesado">
            <img
              className="whatsAppImg"
              src="../../img/WhatsAppFixed.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
