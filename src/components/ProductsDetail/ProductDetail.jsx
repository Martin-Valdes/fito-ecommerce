import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../appFirebase/appFirebase";

import "./ProductDetail.scss";

export const ProductDetail = () => {
  const [prod, setProd] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productsRef = doc(db, "products", id);
    getDoc(productsRef).then((res) => {
      const productDb = { id: res.id, ...res.data() };
      if (!res.exists()) {
        setProductExist(true);
      }
      setProd(productDb);
    });
  }, [id]);

  return (
    <div className="containerProducts">
      <h1>{prod.nameProduct}</h1>
      <div className="container ">
        <div className="imgContainer">
          <div id="carousel" className="carousel slide">
            <div className="carousel-indicators">
              {Object.keys(prod)
                .filter((key) => key.startsWith("img"))
                .map((imgKey, imgIndex) => (
                  <button
                    key={imgKey}
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide-to={imgIndex}
                    className={imgIndex === 0 ? "active" : ""}
                    aria-current={imgIndex === 0 ? "true" : undefined}
                    aria-label={`Slide ${imgIndex + 1}`}
                  ></button>
                ))}
            </div>

            <div className="carousel-inner">
              {Object.keys(prod)
                .filter((key) => key.startsWith("img"))
                .map((imgKey, imgIndex) => (
                  <div
                    key={imgKey}
                    className={`carousel-item ${
                      imgIndex === 0 ? "active" : ""
                    }`}
                  >
                    <img
                      className="d-block w-100"
                      src={prod[imgKey]}
                      alt={`Image ${imgKey}`}
                    />
                  </div>
                ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
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
              data-bs-target="#carousel"
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
      </div>
      <section className="containerInfoProduct">
        <p>{prod.description}</p>
        <p>{prod.stock}</p>
        <h2>{prod.price}</h2>
      </section>
    </div>
  );
};
