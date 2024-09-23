import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import "./CartWidget.scss"

const CartWidget = () => {
  const { cart, allArticle } = useContext(CartContext);

  return (
    <div className="containerWidget">
      <Link to="/cart" className="cartWidget">
        <img
          className="imgCart"
          src="../../img/Wheelbarrow.png"
          alt="cartWidget"
        />
        {cart.length !== 0 && <p>{allArticle()}</p>}
      </Link>
    </div>
  );
};

export default CartWidget;
