import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <section className="navBarContainer">
        <div className="containerLogo">
          <img className="logoNav" src="../../img/imageedit_5_3141996671.gif" alt="" />
        </div>
        <nav className="navContainer">
          <ul className="ulLinks">
           <li className="liLinks"><Link to="/" > Home </Link></li>
            <li className="liLinks"><Link to="/products" >Productos</Link></li>
            <li className="liLinks"><Link to="/services" >Servicios</Link></li>
            <li className="liLinks"><Link to="/contact" >Contacto</Link></li>
          </ul>
        </nav>
        <section className="loginContainer">
          <ul className="ulLogin">
            <li className="liLogin">Registrarme</li>
            <li className="liLogin">Login</li>
            <li className="liLogin">Logout</li>
          </ul>
        </section>
        <div className="imgCartContainer">
          <img className="imgCart" src="../../img/Wheelbarrow.png" alt="" />
        </div>
        <div className="iconContainer">
          <img className="iconSocial" src="../../img/Instagram.png" alt="" />
          <img className="iconSocial" src="../../img/Facebook.png" alt="" />
        </div>
        <div className="iconWhatsappContainer">
            <img className="whatsAppImg" src="../../img/WhatsAppFixed.png" alt="" />
        </div>
      </section>
    </>
  );
};


export  default NavBar;