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
            <div className="ulContainer">
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
              <div className="icoContainer">
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
          <section className="downContainer">
            <div className="newContainer">
              <div>
                <img src="../../img/location.png" alt="" />
                <p>Toledo Canelones 275 Bis.</p>
              </div>
              <div>
                <img src="../../img/WhatsApp.png" alt="" />
                <p>(+598) 094 588 350</p>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d819.7063518419042!2d-56.09673606511867!3d-34.73479499392743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ0JzA1LjMiUyA1NsKwMDUnNDMuOSJX!5e0!3m2!1ses!2suy!4v1725962197184!5m2!1ses!2suy"
                width="500"
                height="350"
                allowFullScreen=""
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
