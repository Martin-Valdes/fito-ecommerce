import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

import "./Cart.scss";

export const Cart = () => {
  const { cart, allCost, deleteArticle, deleteCart } = useContext(CartContext);

  return (
    <div className="contentCart">
      <h1>Mi Carrito</h1>
      {cart.length === 0 ? (
        <div>
          <p>No hay productos en el carrito.</p>
          <Link to="/products">
            <button className="btn-dark  btn">Volver a la tienda</button>
          </Link>
        </div>
      ) : (
        <div className="containerProducts">
          {cart.map((product) => (
            <div key={product.id} className="cartProduct">
              <div>
                <h2>{product.nameProduct}</h2>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio: ${product.cost}</p>
                <button
                  type="button"
                  onClick={() => deleteArticle(product.id)}
                  className="deleteProduct btnRemove btn btn-danger"
                >
                  Eliminar Producto
                </button>
              </div>

              <div>
                <img src={product.img1} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="totalContainer">
        <h2>Total: $ {allCost()}</h2>
        <div className="buttonsCart">
          <Link to="/checkout">
            <button className="confirmBuy btn">Confirmar compra</button>
          </Link>
          <Link to="/products">
            <button className="goProducts btn">Volver a la tienda</button>
          </Link>
          <button
            type="button"
            onClick={deleteCart}
            className="deleteCart btnBuyCart btn btn-dark"
          >
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};
