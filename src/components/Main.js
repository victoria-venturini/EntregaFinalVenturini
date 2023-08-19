import { useState } from "react"
import Container from "./Container"
import { Route, Routes } from "react-router-dom"
import ItemCount from "./ItemCount"

function Main() {

    //Estados
    const [dark, setDark] = useState(false)

    //Accion
    const toggleDark = () => {
        setDark(!dark)
    }

  
    //Vista
    return (
        <main className={dark ? "p-2 grow bg-slate-800 text-white" : "p-2 grow bg-white"}>
            <button onClick={toggleDark}>toggle dark/light</button>
            <ItemCount/>
            <Container/> 
            <Routes>
                <Route path="/home" element={<Container/>}/>
                <Route path="/cat/:id" element={<Container/>}/>
                <Route path="/ubicacion" element={<p>Ubicacion</p>}/>
                <Route path="/contacto" element={<p>Contacto</p>}/>
                <Route path="/carrito" element={<p>Carrito</p>}/>
            </Routes>
            
        </main>
    )
}

export default Main