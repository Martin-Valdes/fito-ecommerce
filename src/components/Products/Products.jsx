import React from "react";
import RenderProducts from "../RenderProducts/RenderProducts";

import "./Products.scss";

const Products = () => {
  return (
    <div className="productsContainer">
      <div class="searchContainer input-group">
        <img className="searchImg input-group-text" id="inputGroupPrepend2" src="../../img/search.svg" alt="" />
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" />
    </div>

      <div className="cardsProducts">
        <RenderProducts />
      </div>
    </div>
  );
};

export default Products;
