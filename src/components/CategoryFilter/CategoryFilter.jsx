import React, {useEffect, useState} from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ReqContext } from "../../Context/ReqFirebase";
import RenderProducts from "../RenderProducts/RenderProducts.jsx";
import ButtonsFilter from "../ButtonFilters/ButtonsFilter.jsx";

import "./CategoryFilter.scss";

const CategoryFilter = () => {
  const { gallery } = useContext(ReqContext);
  const { category } = useParams();
  const [filter, setFilter] = useState([""])

  const filteredItems = gallery.filter((item) => item.category === category);

  useEffect(()=>{
    if (filteredItems && filteredItems.length > 0) {
   setFilter(filteredItems)
  }
  },[])
  
  return (
    <div className="categoryFilterContainer">
      <div className="buttonContainer">
        <ButtonsFilter filtered={filter} />
      </div>
      <ul>
        <RenderProducts filterParams={filteredItems} />
      </ul>
    </div>
  );
};

export default CategoryFilter;
