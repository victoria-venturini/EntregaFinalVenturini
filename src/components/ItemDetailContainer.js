import { useParams } from "react-router-dom"
import Contador from "./Contador"


const ItemDetailContainer= () => {

    const params = useParams()



    return (
        <div>
            <h2>Detalle</h2>
            <img src={`https://picsum.photos/id/${params.id}/200/300`} alt="" />
            <p>id: {params.id}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto nulla porro ullam tenetur quas a, deserunt maiores quo, minima totam rerum assumenda veritatis itaque saepe, blanditiis magni explicabo adipisci!</p>
            <Contador IdProduct={params.id}/>
         
        </div>
    )
}



export default ItemDetailContainer;

