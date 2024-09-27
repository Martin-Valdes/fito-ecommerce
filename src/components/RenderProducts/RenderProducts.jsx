import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReqContext } from "../../Context/ReqFirebase";

import "./RenderProducts.scss";

const RenderProducts = ({ edit, filterParams }) => {
  const { gallery, deleteProduct } = useContext(ReqContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (filterParams) {
      setItems(filterParams);
    } else {
      setItems(gallery);
    }
  }, [items, gallery]);

  return (
    <div className="containerProducts">
      {items.map((list, index) => {
        const carouselId = `carousel-${index}`;
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
                        className={`carousel-item ${
                          imgIndex === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          className="imgProduct d-block w-100"
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
                  <img
                    className="imgArrowIzquierda"
                    src="../../img/flecha-izquierda.png"
                    alt="Next"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <img
                    className="imgArrow"
                    src="../../img/flecha-correcta.png"
                    alt="Next"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <section className="containerDescription">
              <h2>{list.nameProduct}</h2>
              <p>Categoría: {list.category}</p>
              <p>Stock: {list.stock}</p>
              <p>Price: ${list.cost}</p>
              <Link to={`/productDetail/${list.id}`}>
                <button className="btn btn-dark">Detalles</button>
              </Link>
              <button
                onClick={() => deleteProduct(list.id)}
                className={!edit ? "userMode" : "adminMode"}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};
export default RenderProducts;
