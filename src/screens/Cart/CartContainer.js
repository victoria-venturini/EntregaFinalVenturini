import { useContext } from "react";
import CarritoHijo from "./components/CarritoHijo";
import { CartContext } from "../../context/CartContext";

function CartContainer() {
  const { totalProducts } = useContext(CartContext);

  return (
    <div>
      <CarritoHijo />
    </div>
  );
}

export default CartContainer;
