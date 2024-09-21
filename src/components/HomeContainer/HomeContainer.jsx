import React, { useState, useEffect } from "react";
import CarouselSlick from "../CarouselSlick/CarouselSlick.jsx";

import "./HomeContainer.scss";

const HomeContainer = () => {


  // const img = ["1_BIG_ONE_FAMILIA.webp", "1_PK_13-14_FAMILIA.webp", "1_TOP_BUD_FAMILIA.webp","A30105_Jsr4DId.webp", "A30111_0LRYeMa - copia.webp","A30186_mLwe0JX.webp"];
  const images = import.meta.glob('/images/*.*');

  const loadImages = async () => {
    const imageModules = await Promise.all(
      Object.keys(images).map((path) => images[path]())
    );
  
    // Generar un array de las rutas
    const imagesArray = Object.keys(images);
  
    console.log(imagesArray); // Array con las rutas de las imágenes
    return imagesArray;
  };

  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    loadImages().then((paths) => {
      setImagePaths(paths);
    });
  }, []);
console.log(imagePaths)
  return (
    <div className="homeContainer">
      <section className="backVideo">
        <video autoPlay muted loop src="../../video/videoBack.mp4"></video>
        <div className="buttonContainer">
          <h1>Promoción de un producto o descuentos en particular</h1>
          <button>Más info</button>
        </div>
      </section>
      <section className="sendSection">
        <img src="../../img/rectangleSend.png" alt="" />
        <div className="textSend">
          <h2 className="h2">
            Realizamos envios <span className="spanSend">DAC</span> a todo el{" "}
            <span className="spanSend">país</span> .
          </h2>
        </div>
      </section>
      <section className="carousellContainer">
        <CarouselSlick props={imagePaths} />
      </section>
      <section className="aboutContainer">
        <h2>Sobre FITO GROW SHOP</h2>
        <p>
          Fito nació en 2020 con una misión clara: ofrecer oleatos a base de
          cannabis medicinal y psicoactivo para el cuidado de la piel,
          inspirándonos en los beneficios de esta planta sagrada milenaria.
          Nuestra pasión por la sanación natural nos llevó a desarrollar
          productos que promueven el bienestar y el equilibrio.
        </p>
        <p>
          Tras la pandemia, nos vimos obligados a dejar las ferias y
          concentrarnos en las redes sociales, ampliando nuestro alcance y
          apostando por el envío a nivel nacional. Gracias al apoyo de nuestra
          comunidad, logramos abrir nuestro propio local y hoy, con orgullo,
          presentamos nuestra página web.
        </p>
        <h3>¡Bienvenidos a Fito, donde la naturaleza es nuestra guía!</h3>
      </section>
      <section className="categoryContainer">
        <div className="imgContainer">
          <img src="../../img/oil.png" alt="" />
          <h4>Aceite medicinal</h4>
          <p>
            Mejora automáticamente las fotos  Mejorar calidad de imagen  con un
            solo clic. Mejorar los colores y la iluminación,  mejorar fotos
            borrosas  y arregla detalles para sacar
          </p>
        </div>
        <div className="imgContainer">
          <img src="../../img/floor.png" alt="" />
          <h4>Accesorios</h4>
          <p>
            Mejora automáticamente las fotos  Mejorar calidad de imagen  con un
            solo clic. Mejorar los colores y la iluminación,  mejorar fotos
            borrosas  y arregla detalles para sacar
          </p>
        </div>
        <div className="imgContainer">
          <img src="../../img/cream.png" alt="" />
          <h4>Cremita de mari</h4>
          <p>
            Mejora automáticamente las fotos  Mejorar calidad de imagen  con un
            solo clic. Mejorar los colores y la iluminación,  mejorar fotos
            borrosas  y arregla detalles para sacar
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeContainer;
