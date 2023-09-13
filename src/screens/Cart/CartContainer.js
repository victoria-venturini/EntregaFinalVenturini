import { useContext } from "react";
import CarritoHijo from "./components/CarritoHijo";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../Checkout/CheckoutForm";


function CartContainer() {
  const { totalProducts } = useContext(CartContext);

  return (
    <div>
      <CarritoHijo />
      <CheckoutForm/>
    </div>
  );
}

export default CartContainer;
