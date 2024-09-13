import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../appFirebase/appFirebase";

import "./RenderProducts.scss";

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
  }, []);

  return (
    <div className="containerProducts">
  {gallery.map((list, index) => {
    const carouselId = `carousel-${index}`; // Generar un ID único para cada carrusel
    return (
      <div className="container card" key={index}>
        <div className="imgContainer">
          <div id={carouselId} className="carousel slide">
            <div className="carousel-indicators">
              {Object.keys(list)
                .filter((key) => key.startsWith("img"))
                .map((imgKey, imgIndex) => (
                  <button
                    key={imgKey}
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide-to={imgIndex}
                    className={imgIndex === 0 ? "active" : ""}
                    aria-current={imgIndex === 0 ? "true" : undefined}
                    aria-label={`Slide ${imgIndex + 1}`}
                  ></button>
                ))}
            </div>

            <div className="carousel-inner">
              {Object.keys(list)
                .filter((key) => key.startsWith("img"))
                .map((imgKey, imgIndex) => (
                  <div
                    key={imgKey}
                    className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                  >
                    <img
                      className="d-block w-100"
                      src={list[imgKey]}
                      alt={`Image ${imgKey}`}
                    />
                  </div>
                ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <section className="containerDescription">
          <h2>{list.nameProduct}</h2>
          <p>{list.description}</p>
          <p>{list.stock}</p>
          <p>Price: ${list.cost}</p>
          <button className="btn btn-dark">Detalles</button>
          <button type="button" className="btn btn-info">
            Agregar al carrito
          </button>
        </section>
      </div>
    );
  })}
</div>

  );
};
export default RenderProducts;
