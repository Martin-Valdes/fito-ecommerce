import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Form from "./FormComponent";
import { db, storage } from "../../appFirebase/appFirebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import RenderProducts from "../RenderProducts/RenderProducts.jsx";


import "./FormProducts.scss";

const FormInputProducts = () => {
  let urlImDesc;
  let archivosGuardados = [];

  const [dataForm, setDataForm] = useState({
    nameProduct: "",
    description: "",
    cost: "",
    stock: "",
    category: "",
  });
  const [idProduct, setIdProduct] = useState("");

  const saveDataInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    handleFileInput();
    const dataSend = { ...dataForm };
    const productRef = collection(db, "products");
    addDoc(productRef, dataSend).then((res) => setIdProduct(res.id));
  };

  ////// Subimos a storage las img.
  const handleFileInput = async (e) => {
    const archivosNuevos = Array.from(e.target.files);

    archivosGuardados = archivosGuardados.concat(archivosNuevos);

    archivosGuardados.map(async (archivo, index) => {
      const refFile = ref(storage, `photos/${archivo.name}`);

      await uploadBytes(refFile, archivo);

      completeDataObjet(refFile, index);
    });
  };

  //Descargamos url de img y las indexamos en dataform que es el producto con sus datos.
  const completeDataObjet = async (refFile, index) => {
    urlImDesc = await getDownloadURL(refFile);
    dataForm[`img${index + 1}`] = urlImDesc;
  };

  return (
    <div className="formContainer">
      {idProduct ? (
        <div>
          <h1>Producto agregado</h1>
        </div>
      ) : (
        <>
        <h1>Nuevo Producto</h1>
          <Form
            dataForm={dataForm}
            saveDataInput={saveDataInput}
            handleFileInput={handleFileInput}
            sendData={sendData}
           
          />
          <RenderProducts edit={true} />
        </>
      )}
    </div>
  );
};

export default FormInputProducts;
