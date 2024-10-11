import React, { useEffect, useState } from "react";
import { FormData } from "./FormData.jsx";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../appFirebase/appFirebase.js";
import Swal from 'sweetalert2'

import "./Contact.scss";

const Contact = () => {

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const saveDataInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const [idProduct, setIdProduct] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    const dataSend = { ...dataForm };
    const productRef = collection(db, "messages");
    addDoc(productRef, dataSend).then((res) => setIdProduct(res.id));

    
    
  };
  useEffect(() => {
    if (idProduct) {
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado!",
        text: "A la brevedad nos contactaremos!!",
        footer: '<a href="/">Ir al inicio</a>',
        theme: "Borderless"
      });
    }
  },[idProduct])
  
  return (
    <div className="contactContainer">
      <div className="videoContainer">
        <video autoPlay src="../../img/videoEnvios.mp4">
        </video>
      </div>
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
          <FormData
            dataForm={dataForm}
            saveDataInput={saveDataInput}
            sendData={sendData} />
        </section>
      </div>
    </div>
  );
};

export default Contact;
