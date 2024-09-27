import React, { useContext, useState, useEffect } from "react";
import { ReqContext } from "../../Context/ReqFirebase.jsx";
import { Link } from "react-router-dom";

import("./Categories.scss");

const Categories = () => {
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

  console.log(gallery);

  return (
    <div className="categoryContainer">
      <h1>Categorías</h1>
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
  );
};

export default Categories;
