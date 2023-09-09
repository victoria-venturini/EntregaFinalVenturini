import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalProducts: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  const addProd = (product, quantity) => {
    const index = cart.findIndex((prod) => prod.id === product.id);
    if (index === -1) {
      setCart([...cart, { ...product, quantity }]);
    } else {
      const newCart = [...cart];
      newCart[index].quantity += quantity;
      setCart(newCart);
    }
    setTotalProducts(totalProducts + quantity);
    setTotal(total + product.price * quantity);
  };

  const removeProd = (product) => {
    const index = cart.findIndex((prod) => prod.id === product.id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setTotalProducts(totalProducts - product.quantity);
    setTotal(total - product.price * product.quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotalProducts(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProd, removeProd, clearCart, total, totalProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
