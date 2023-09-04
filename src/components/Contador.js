import { useState , useContext } from "react"
import { contexto } from "./miContexto"
import { CartContext } from "./CartContext"

function Contador(props) {
    const { IdProduct } = props
    console.log('asd', IdProduct)
    let [contador,setContador] = useState(0)
    const {addProd} = useContext(CartContext)

    

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    const resetear = () => setContador(0)
    const agregar = () => addProd(IdProduct, contador)

    return (
        <main className="p-2 grow">
            <p>Contador : {contador}</p>
            <button className="border p-1 rounded" onClick={sumar}>sumar</button>
            <button className="border p-1 rounded" onClick={restar}>restar</button>
            <button className="border p-1 rounded" onClick={resetear}>resetear</button>
            <button className="border p-1 rounded" onClick={agregar}>Agregar al carrito</button> 
        </main>
    )
}

export default Contador

