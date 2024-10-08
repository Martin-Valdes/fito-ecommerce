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
        {/* <h2>El Arte de la Extracción de Rosin</h2>
        <div className="firstContainer">
          <p className="firstP">
            El proceso comienza con la entrega de la materia prima en su estado
            óptimo por parte del cultivador. Esta materia se prepara
            cuidadosamente para ser colocada en una malla de diferentes micras,
            dependiendo del nivel de filtración deseado, o en un papel
            siliconado especializado. A continuación, se somete a un prensado
            utilizando equipos hidráulicos de alta precisión.
            <br />
          </p>
          <img src="../../img/Rosin-Press-Pure-Pressure-.webp" alt="" />
        </div>

        <p className="secondP">
          Durante este paso, se aplica una presión controlada en conjunto con
          una temperatura específica, cuidadosamente ajustada para maximizar el
          rendimiento y preservar la integridad de los compuestos activos. Este
          control preciso de la presión y temperatura permite extraer un retorno
          de la más alta calidad, garantizando un producto puro, limpio y sin
          contaminantes, ideal para el consumo.
          <br />
        </p>
        <p className="thirtyP">
        </p> */}
      </section>
    </div>
  );
};

export default Services;
