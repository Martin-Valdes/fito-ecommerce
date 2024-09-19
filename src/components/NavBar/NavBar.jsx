import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";

import "./NavBar.scss";

const NavBar = () => {
  const { login, logout, user } = useContext(authContext);

  return (
    <>
      <section className="navBarContainer">
        <div className="containerLogo">
          <img
            className="logoNav"
            src="../../img/imageedit_5_3141996671.gif"
            alt=""
          />
        </div>
        <nav className="navContainer">
          <ul className="ulLinks">
            <li className="liLinks">
              <Link to="/"> Home </Link>
            </li>
            <li className="liLinks">
              <Link to="/products">Productos</Link>
            </li>
            <li className="liLinks">
              <Link to="/services">Servicios</Link>
            </li>
            <li className="liLinks">
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        
        
        <section className="loginContainer">
          <ul className="ulLogin">
            <li onClick={login} className="liLogin">
              Login
            </li>
            <li onClick={logout} className={user ? 'liLogin' : 'liLoginFalse'}>
              Logout
            </li>
          </ul>
          <div className="adminContainer">
          {user.data && user.data.email === "valdesmartin@gmail.com" ? (
          <Link to="/admin">ADMIN</Link>
        ) : null}

        {user ? (
          <>

            <img className={user ? 'loginTrue' : 'loginFalse'}
              src={
                user.data ? user.data.picture : "../../img/defaultAvatar.png"
              }
              alt=""
            />
          </>
        ) : (
          null
        )}
        </div>
        </section>
        <div className="imgCartContainer">
          <img className="imgCart" src="../../img/Wheelbarrow.png" alt="" />
        </div>
        <div className="iconContainer">
          <img className="iconSocial" src="../../img/Instagram.png" alt="" />
          <img className="iconSocial" src="../../img/Facebook3.png" alt="" />
        </div>
        <div className="iconWhatsappContainer">
          <img
            className="whatsAppImg"
            src="../../img/WhatsAppFixed.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default NavBar;
