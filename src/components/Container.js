import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
import { useParams } from "react-router-dom"
import {db} from "../db/firebase"
import {getDocs, collection} from "firebase/firestore"


function Container() {

    
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const resultado = useParams() 
    


    
    useEffect(() => {
        const productsCollection = collection (db, "products")

        const request = getDocs (productsCollection)

        request
        .then ((result)=>{
            const aux = result.docs.map((doc)=>{
                
                const product = doc.data()
                product.id = doc.id
                console.log(product)
                return product 
                })
                setData(aux)
            })
        .catch((error)=>{
            console.log("error")
        })


        getAllProducts()
        .then(res=>{
            setData(res)
        })

        if (resultado.id) {
            console.log("Estoy en la ruta de categorias" + resultado.id)
        } else {
            console.log("Estoy en la ruta de productos,osea Home")
        }
      

    }, [resultado.id])


    const getAllProducts = () => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                
            }, 2000)
        })

        return pedido
    }

    return (
        <Presentacional data={data} />
    )

}

export default Container