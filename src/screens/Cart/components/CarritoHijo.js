import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CarritoHijo(props) {
  const { cart, totalProducts, total } = useContext(CartContext);

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <img
            src={product.image}
            alt=""
            style={{ height: "10%", width: "10%" }}
          />

          <p>{product.price}</p>
          <p>{product.quantity}</p>
        </div>
      ))}
      <p> total de productos: {totalProducts}</p>
      <p> total de precio: {total}</p>
    </div>
  );
}

export default CarritoHijo;
