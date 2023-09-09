import { useContext } from "react";
import CarritoHijo from "./components/CarritoHijo";
import { CartContext } from "../../context/CartContext";

function CartContainer() {
  const { totalProducts } = useContext(CartContext);

  return (
    <div>
      <p>Cantidad total de productos : {totalProducts}</p>
      <CarritoHijo />
    </div>
  );
}

export default CartContainer;
