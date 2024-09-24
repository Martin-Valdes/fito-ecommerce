import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import CartWidget from "./CartWidget";

import "./NavBar.scss";

const NavBar = () => {
  const { login, logout, user } = useContext(authContext);

  return (
    <>
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
            <li className="liLinks nav-item">
              <Link className="nav-link" to="/"> Home </Link>
            </li>
            <li className="liLinks nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>
            <li className="liLinks nav-item">
              <Link className="nav-link" to="/services">Servicios</Link>
            </li>
            <li className="liLinks nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul><section className="loginContainer">
          <ul className="ulLogin">
            <li onClick={login} className="liLogin">
              Login
            </li>
            <li onClick={logout} className={user ? "liLogin" : "liLoginFalse"}>
              Logout
            </li>
          </ul>
          <div className="adminContainer">
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
          <div className="iconContainer">
            <Link to="https://www.instagram.com/fitogrowshop?igsh=YWVoMTV6bXJ5dHpi&utm_source=qr">
              <img
                className="iconSocial"
                src="../../img/Instagram.png"
                alt=""
              />
            </Link>
          </div>
        </section>
        <div className="imgCartContainer">
          <CartWidget/>
        </div>
        </nav>

        
        <div className="iconWhatsappContainer">
          <Link to="https://wa.me/59894588350?text=Hola%2C%20estoy%20interesado">
            <img
              className="whatsAppImg"
              src="../../img/WhatsAppFixed.png"
              alt=""
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default NavBar;
