import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";

function CartWidget() {
  const { totalProducts } = useContext(CartContext);

  return (
    <NavLink to="/carrito">
      <i className="material-icons">shopping_cart</i>
      <span>{totalProducts}</span>
    </NavLink>
  );
}

export default CartWidget;
