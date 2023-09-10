import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {Link} from "react-router-dom";



function CarritoHijo(props) {
  const { cart, clearCart, removeProd, totalProducts, total } = useContext(CartContext)


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

      <p> Cantidad de productos: {totalProducts}</p>
      <p> Precio total: {total}</p>
     

      <button onClick={()=> clearCart()} className="Button">Vaciar Carrito</button>
      
      <Link to = '/checkout'> <button>Checkout</button> </Link>
    </div>
  );
}

export default CarritoHijo;
