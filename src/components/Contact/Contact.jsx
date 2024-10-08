import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="back"></div>
      <div className="new">
        <section className="blocksContainer">
          <div className="block">
            <img src="../../img/emailPng.png" alt="" />
            <h2>Email</h2>
            <p>fitogrowshop@gmail.com</p>
          </div>
          <div className="block">
            <img src="../../img/ubicPng.png" alt="" />
            <h2>Direccion</h2>
            <p>Toledo Canelones 275 Bis.</p>
          </div>
          <div className="block">
            <img src="../../img/phonePng.png" alt="" />
            <h2>Telefono</h2>
            <p>(+598) 094 588 350</p>
          </div>
        </section>
        <section className="formContainer">
          <div className="titleContainer">
            <h1>Envianos tu consulta</h1>
          </div>
          <input
            className="formInput inp"
            type="text"
            id="nameProduct"
            name="nameProduct"
            placeholder="Nombre"
          />
          <input
            className="formInput inp"
            type="text"
            id="nameProduct"
            name="nameProduct"
            placeholder="email"
          />
          <textarea
            class="formInput message"
            id="message"
            rows="10"
            name="message"
            placeholder="En que podemos ayudarte..."
          ></textarea>
          <div className="buttonContainer">
            <button className="buttonSend">Enviar</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
