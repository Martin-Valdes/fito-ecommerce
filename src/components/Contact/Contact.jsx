import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <section className="blocksContainer">
        <div></div>
        <div></div>
        <div></div>
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
  );
};

export default Contact;
