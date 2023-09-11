import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate, useNavigate } from "react-router-dom";

function Counter(props) {
  const { product } = props;
  let [contador, setContador] = useState(0);
  const { cart, addProd } = useContext(CartContext);
  const navigate = useNavigate()

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  const resetear = () => setContador(0);
  const agregar = () => {addProd(product, contador); navigate("/carrito")}

  return (
    <main className="p-2 grow">
      
      <button className="bg-rose-200 shadow-lg shadow-indigo-500/50 w-28 h-8 rounded border-2 border-indigo-500/50" onClick={sumar}>
        sumar
      </button>
      <button className="bg-rose-200 shadow-lg shadow-indigo-500/50 w-28 h-8 rounded border-2 border-indigo-500/50"onClick={restar}>
        restar
      </button>
      <button className="bg-rose-200 shadow-lg shadow-indigo-500/50 w-44 h-8 rounded border-2 border-indigo-500/50" onClick={agregar}>
        Agregar al carrito
      </button>
      <p className="bg-red-50 shadow-lg  shadow-indigo-500/50 w-48 h-8 rounded border-indigo-500/50 font-semibold text-md text-slate-600">Cantidad : {contador}</p>
    </main>
  );
}

export default Counter;
