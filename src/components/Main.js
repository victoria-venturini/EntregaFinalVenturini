import { useState } from "react"
import Container from "./Container"
import ItemCount from "./ItemCount"
import Contador from "./Contador"
//  import ItemListContainer from './components/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer';


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
            <Contador/>
            <Container/> 
            <ItemCount/>
            {/* <ItemListContainer greeting="Bienvenidos a Kira Indumentaria" /> */}
            {/* <ItemDetailContainer/> */}
          
            
        </main>
    )
}

export default Main