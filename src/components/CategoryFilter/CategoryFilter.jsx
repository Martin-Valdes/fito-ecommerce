import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ReqContext } from "../../Context/ReqFirebase";
import RenderProducts from "../RenderProducts/RenderProducts.jsx"

const CategoryFilter = () => {

  const { gallery } = useContext(ReqContext);
  const { category } = useParams();

  const filteredItems = gallery.filter(item => item.category === category);
  
  return(
  <div>
    <ul>
        <RenderProducts filterParams={filteredItems} />
      </ul>
  </div>)
};

export default CategoryFilter;
