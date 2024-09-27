import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ReqContext } from "../../Context/ReqFirebase";
import RenderProducts from "../RenderProducts/RenderProducts.jsx";
import ButtonsFilter from "../ButtonFilters/ButtonsFilter.jsx";

import "./CategoryContainer.scss";

const CategoryFilter = () => {
  const { gallery } = useContext(ReqContext);
  const { category } = useParams();

  const filteredItems = gallery.filter((item) => item.category === category);

  return (
    <div className="categoryFilterContainer">
      <div className="buttonContainer">
        <ButtonsFilter />
      </div>
      <ul>
        <RenderProducts filterParams={filteredItems} />
      </ul>
    </div>
  );
};

export default CategoryFilter;
