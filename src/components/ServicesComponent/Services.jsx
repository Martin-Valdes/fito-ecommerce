import React from "react";
import { Link } from "react-router-dom";

import "./Services.scss";

const Services = () => {
  return (
    <div className="servicesContainer">
      <section className="prensCannavis">
        <div className="textContainer">
          <div>
            <h1>Servicio de prensado</h1>
            <p>
              El resultado final es un extracto que conserva todo el perfil de
              terpenos y cannabinoides esenciales, logrando una experiencia
              superior tanto en sabor como en efectos. Este método asegura una
              extracción sin solventes, ofreciendo un producto natural y
              respetuoso con el proceso de producción.
            </p>
          </div>
          <button className="btn btn-primary">
            <Link to="https://wa.me/59894588350?text=Hola%2C%20estoy%20interesado">
              Coordinar Visita
            </Link>
          </button>
        </div>
        <img src="../../img/First-drips-of-rosin.webp" alt="" />
        
      </section>
    </div>
  );
};

export default Services;
