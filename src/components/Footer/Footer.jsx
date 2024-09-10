import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <section className="footerBack">
        <section className="footerContainer">
          <section className="upContainer">
            <div>
              <img
                className="logoFooter"
                src="../../img/imageedit_5_3141996671.gif"
                alt=""
              />
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Productos</li>
              </ul>
              <ul>
                <li>Servicios</li>
                <li>Contacto</li>
              </ul>
              <ul>
                <li>Registrarme</li>
                <li>Login</li>
              </ul>
              <div>
                <img
                  className="icoInstagram"
                  src="../../img/Instagram.png"
                  alt=""
                />
                <img
                  className="icoFacebook"
                  src="../../img/Facebook.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
