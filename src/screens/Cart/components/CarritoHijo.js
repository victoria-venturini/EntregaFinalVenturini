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
          <p className="bg-rose-200/50 w-28 h-auto rounded border-2">{product.quantity}</p>
          <p className="bg-rose-200/50 w-28 h-auto rounded border-2">${product.price}</p>
        </div>
      ))}

      <p className="shadow-lg shadow-rose-200/50 w-52 h-auto rounded border-2 border-rose-200/50"> Cantidad de productos: {totalProducts}</p>
      <p className="shadow-lg shadow-rose-200/50 w-44 h-auto rounded border-2 border-rose-200/50"> Precio total: {total}</p>
     

      <button onClick={()=> clearCart()} className='shadow-lg shadow-rose-400/50 p-3 bg-rose-200 text-slate-800 font-semibold  uppercase rounded-lg'>Vaciar Carrito</button>
      
      <Link to = '/'> <button className='shadow-lg shadow-rose-400/50 p-3 bg-rose-200 text-slate-800 font-semibold  uppercase rounded-lg'>Seguir Comprando</button> </Link>
    </div>
  );
}

export default CarritoHijo;
