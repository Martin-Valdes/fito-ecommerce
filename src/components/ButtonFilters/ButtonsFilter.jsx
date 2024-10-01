import React, { useContext, useState, useEffect } from "react";
import { ReqContext } from "../../Context/ReqFirebase.jsx";
import { Link } from "react-router-dom";

import "./ButtonsFilters.scss"

const ButtonsFilter = ({filtered}) => {
  
 

    const { gallery } = useContext(ReqContext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const uniqueCategories = [];
    gallery.forEach((item) => {
      if (!uniqueCategories.includes(item.category)) {
        uniqueCategories.push(item.category);
      }
    });
    setCategory(uniqueCategories);
  }, [gallery]);

 

  return (
    <>
    <div className="media768"> 
      <button
        class="catButton btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Categorías
      </button>
      
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Categorías
          </h5>
         
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        
        <div class="offcanvas-body">
        
        {category.map((element, index) => (
        <div className="liContainer">
          <Link to={`/categoryFilter/${element}`}>
            <li className="" key={index}>
              {element}
            </li>
          </Link>
          
        </div>
        
      ))}
        </div>
        
      </div>
    </div>
    <div className="categoryContainer">
      {}
      <h1>Categorías</h1>
      <div className="filteritemsbtn">
      
      {filtered ? (<Link to="/products"><button className="btn btnDelete">Borrar filtro<img src="../../img/filtrar.png" alt="" /></button></Link>): <p></p> }
      {category.map((element, index) => (
        <div className="liContainer">
          <Link to={`/categoryFilter/${element}`}>
            <li className="" key={index}>
              {element}
            </li>
            
          </Link>
          
        </div>
      ))}
      </div>
    </div>
  </>
  )
}

export default ButtonsFilter
