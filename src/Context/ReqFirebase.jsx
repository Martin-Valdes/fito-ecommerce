import React, { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import {
  getDocs,
  getDoc,
  doc,
  collection,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../src/appFirebase/appFirebase.js";

const ReqContext = createContext();

const ReqFirebase = ({ children }) => {
  const [gallery, setGallery] = useState([]);

  //Funcion para obtener todos los productos
  useEffect(() => {
    const getGallery = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setGallery(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getGallery();
  }, []);

  //Funcion que adquiere referencia  desde su id.

  const productId = (idProduct) => {
    const querySnapshot = doc(db, "products", idProduct);

    return querySnapshot;
  };

  ///Elimina un producto recibe como parametro su ID
  const deleteProduct = async (idProduct) => {
    await deleteDoc(productId(idProduct));
  };

  ///Busca un producto y recibe su Id
  const searchProduct = async (idProduct) => {
    
    try {
      const documents = await getDoc(productId(idProduct));
      return documents.data();
    } catch (error) {
      console.log(error);
    }
  };

  //Editar un producto recibiendo como parametros Id y nueva data para pushear
  const editProduct = async (idProduct, dataProduct) => {
    try {
      await updateDoc(productId(idProduct), dataProduct);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReqContext.Provider
      value={{ gallery, deleteProduct, editProduct, productId, searchProduct }}
    >
      {children}
    </ReqContext.Provider>
  );
};

export { ReqFirebase, ReqContext };
