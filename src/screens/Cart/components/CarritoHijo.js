import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {Link} from "react-router-dom";



function CarritoHijo(props) {
  const { cart, clearCart, removeProd, totalProducts, total } = useContext(CartContext)


  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <p className="shadow-lg shadow-rose-200/50 w-66 h-8 rounded border-2 border-rose-200/50">{product.title}</p>
          <img
            src={product.image}
            alt=""
            style={{ height: "10%", width: "10%" }}
          />
          <p className="bg-rose-200/50 w-16 h-8 rounded border-2">${product.price}</p>
        </div>
      ))}

      <p className="shadow-lg shadow-rose-200/50 w-48 h-8 rounded border-2 border-rose-200/50"> Cantidad de productos: {totalProducts}</p>
      <p className="shadow-lg shadow-rose-200/50 w-66 h-8 rounded border-2 border-rose-200/50"> Precio total: {total}</p>
     

      <button onClick={()=> clearCart()} className="bg-rose-200 shadow-lg shadow-indigo-500/50 w-28 h-8 rounded border-2 border-indigo-500/50">Vaciar Carrito</button>
      
      <Link to = '/checkout'> <button className="bg-rose-200 shadow-lg shadow-indigo-500/50 w-28 h-8 rounded border-2 border-indigo-500/50">Checkout</button> </Link>
    </div>
  );
}

export default CarritoHijo;
