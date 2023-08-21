import { useState } from "react"

function Contador() {
    //Valores
    let [contador,setContador] = useState(0)

    //Acciones
    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    }

    //Vista
    return (
        <main className="p-2 grow">
            <p>Contador : {contador}</p>
            <button className="border p-1 rounded" onClick={sumar}>sumar</button>
            <button className="border p-1 rounded" onClick={restar}>restar</button>
            <button className="border p-1 rounded" onClick={resetear}>resetear</button>
            <div>
                <button className='Button'> 
                Agregar al carrito
                </button>
            </div>
        </main>
    )
}

export default Contador