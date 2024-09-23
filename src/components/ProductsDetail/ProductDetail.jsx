import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../appFirebase/appFirebase";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import "./ProductDetail.scss";

export const ProductDetail = () => {
  const { addProduct } = useContext(CartContext);
  const [prod, setProd] = useState([]);
  const [value, setValue] = useState(1);
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

  const cuantityRender = (number) => {
    setValue(number);
    setProd({ ...prod, cantidad: number });
  };

  return (
    <div className="containerProductsDetail">
      <div className="containerDetail">
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
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <img
                className="imgArrowIzquierda"
                src="../../img/flecha-correcta.png"
                alt="Next"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <section className="infoDetailContainer">
        <h1>{prod.nameProduct}</h1>
        <section className="containerInfoProduct">
          <p className="pTitle">Descripción:</p>
          <p>{prod.description}</p>
          <p className="pTitle">Stock: {prod.stock}</p>
          <div className="cuantityContainer">
            <p className="pTitle">Cantidad: </p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {value}
              </button>
              <ul className="dropdown-menu">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <li
                    key={number}
                    onClick={() => cuantityRender(number)}
                    className="dropdown-item"
                  >
                    {number}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2>$ {prod.cost}</h2>
          <section className="sectionButtons">

            <Link to="/cart">
            <button
              type="button"
              onClick={() => {
                 if(!prod.cantidad) {
                  prod.cantidad = 1
                 }
                addProduct(prod)}}
              class="btnBuyCart btn btn-dark"
            >
              Agregar al Carrito
            </button>
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
};
