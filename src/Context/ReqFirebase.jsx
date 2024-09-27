import React, { createContext, useState, useEffect } from "react";
import { getDocs, doc, collection, deleteDoc } from "firebase/firestore";
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

  const deleteProduct = (idProduct) => {
    const querySnapshot = doc(db, "products", idProduct);

    deleteDoc(querySnapshot);
  };

  return (
    <ReqContext.Provider value={{ gallery, deleteProduct }}>
      {children}
    </ReqContext.Provider>
  );
};

export { ReqFirebase, ReqContext };
