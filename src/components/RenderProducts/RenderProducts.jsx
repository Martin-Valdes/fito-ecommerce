import React, { useEffect, useState } from "react";
import { getDocs,doc, collection } from "firebase/firestore";
import { app, db } from "../../appFirebase/appFirebase";

const RenderProducts = () => {
  const [gallery, setGallery] = useState([]);

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
    console.log(gallery)
  }, []);

  return (
    <div className="container card">
      {
      gallery.map((list) => (
        <div>
          <div>
            
            <img src={list.img1} alt="" />
          </div>
          <section className="containerDescription">
            <h2></h2>
            <p></p>
            <p></p>
            <button></button>
          </section>
        </div>
      ))}
    </div>
  );
};
export default RenderProducts;
