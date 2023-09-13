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
      <div>
      <button className='shadow-lg shadow-rose-400/50 p-3  w-auto mx-64 text-slate-800 font-semibold  uppercase rounded-lg' onClick={sumar}>
        sumar
      </button>
      <button className='shadow-lg shadow-rose-400/50 p-3 w-auto mx-64 text-slate-800 font-semibold  uppercase rounded-lg'onClick={restar}>
        restar
      </button>
      <p className='shadow-lg shadow-rose-400/50 p-3 w-auto mx-64 text-slate-800 font-semibold  uppercase rounded-lg'>Cantidad:{contador}</p>
      <button className='shadow-lg shadow-rose-400/50 p-3  w-auto mx-64 text-slate-800 font-semibold  uppercase rounded-lg' onClick={agregar}>
        Agregar al carrito
      </button>
      </div>
      
     
    </main>
  );
}

export default Counter;
