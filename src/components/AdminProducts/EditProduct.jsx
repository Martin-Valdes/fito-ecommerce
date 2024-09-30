import React, { useState, useContext, useEffect } from "react";
import Form from "./FormComponent.jsx";
import { ReqContext } from "../../Context/ReqFirebase.jsx";
import { useParams } from "react-router-dom";

import "./EditForm.scss"

export const EditProduct = () => {
  const { id } = useParams();
  const { editProduct, searchProduct } = useContext(ReqContext);
  const [product, setProduct] = useState({});
  const [dataForm, setDataForm] = useState({});
  const saveDataInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    e.preventDefault();
    const dataSend = { ...dataForm };
    editProduct(id, dataSend);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await searchProduct(id); // Espera a que se resuelva la promesa
        console.log("Fetched Product:", fetchedProduct); // Log para ver el producto obtenido
        if (fetchedProduct) {
          setProduct(fetchedProduct); // Establece el producto si se encuentra
        } else {
          console.warn("Producto no encontrado para el id:", id); // Log si no se encuentra el producto
        }
      } catch (error) {
        console.error("Error al buscar el producto:", error); // Manejo de errores
      }
    };

    fetchProduct(); // Llama a la función
  }, [id, searchProduct]);

  return (
    <div className="editContainerForm">
      <div className="formContainerEdit">
      <Form
        dataForm={dataForm}
        saveDataInput={saveDataInput}
        handleFileInput={"handleFileInput"}
        sendData={sendData}
        product={product}
      />

      </div>
    </div>
  );
};
