import React, { useState, useContext, useEffect } from "react";
import RenderProducts from "../RenderProducts/RenderProducts";
import Categories from "../Categories/Categories";
import { ReqContext } from "../../Context/ReqFirebase";


import "./Products.scss";

const Products = () => {

  const { gallery } = useContext(ReqContext);
  const [dataForm, setDataForm] = useState({
    category: ""
  })
  const [productsFilter, setProductsFilter] = useState([]);

  const saveDataInput = (e) => {
    e.preventDefault();
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const productsFiltered = gallery.filter(product =>
    product.nameProduct.toLowerCase() === dataForm.category.toLowerCase()
  );


  const searchProducts = (e) => {
    e.preventDefault();
    setProductsFilter(productsFiltered)
  };

  const deleteFilter = (e) => {
    e.preventDefault(); 
    setDataForm({ category: "" }); 
    setProductsFilter([]); 
  }



  return (
    <div className="products">
      <div className="catContainer">
        <Categories />
      </div>
      <div className="productsContainer">
        <div className="searchContainer input-group">
          <form onSubmit={searchProducts}>
            <input
              type="text"
              class="form-control"
              name="category"
              id="category"
              aria-describedby="inputGroupPrepend2"
              value={dataForm.category}
              onChange={saveDataInput}
            />
            <button type="submit" ><img
              className="searchImg btn input-group-text"
              id="inputGroupPrepend2"
              src="../../img/search.svg"
              alt=""
            /></button>
            <button onClick={deleteFilter} className={productsFilter.length > 0 ? "buttonCloseFilter btn": "buttonCloseFilterNone "}> Quitar Filtro</button>
          </form>
        </div>
        <div className="cardsProducts">
          <RenderProducts filterProducts={productsFilter} />
        </div>
      </div>
    </div>
  );
};

export default Products;
