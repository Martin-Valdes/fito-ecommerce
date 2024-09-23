import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  ///FUNCION PARA VERFICAR Y AGREGAR PDODUCTOS AL CART, SI EL PRODUCTO EXISTE EN EL CART SUMA LA CANTDAD A LA EXISTENETE

  const addProduct = (newProduct) => {
    const productExist = onCart(newProduct.id);

    if (productExist) {
      const cartModify = cart.map((productCart) => {
        if (newProduct.id === productCart.id) {
          return {
            ...productCart,
            cantidad: productCart.cantidad + newProduct.cantidad,
          };
        } else {
          return productCart;
        }
      });
      setCart(cartModify);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  //Verifica si existe en cart rl product

  const onCart = (idProduct) => {
    return cart.some((product) => product.id === idProduct);
  };

  //funcion para saber la cantidad de articulos en cart

  const allArticle = () => {
    return cart.reduce((all, newProduct) => all + newProduct.cantidad, 0);
  };

  //Funcion para saber el costo total de los productos del cart

  const allCost = () => {
    return cart.reduce(
      (all, newProduct) => all + newProduct.cantidad * newProduct.cost,
      0
    );
  };

  //Funcion para vaciar cart

  const deleteCart = () => {
    setCart([]);
  };

  //Funcion para eliminar un articulo del cart

  const deleteArticle = (idProduct) => {
    const filterProduct = cart.filter((producto) => producto.id !== idProduct);
    setCart(filterProduct);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        allArticle,
        allCost,
        deleteCart,
        deleteArticle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
