import { useState } from "react"
import CarritoHijo from "./CarritoHijo"
import Contador from "./Contador"

function Carrito() {

    const [selectedCant,setSelectedCant] = useState(0)

    // const onAdd = (cantidad) => {
    //     console.log("Mi Callback onAdd")
    //     if(){
    //         setSelectedCant(cantidad)
    //     }else{
    //         setSelectedCant(cantidad + 1)
    //     }
    // }

    return (
        <div>
            <p>Cantidad seleccionada desde el componente hijo : {selectedCant}</p>
            <CarritoHijo
                // onAdd={onAdd}
            />
            <Contador/>
        </div>
    )
}

export default Carrito