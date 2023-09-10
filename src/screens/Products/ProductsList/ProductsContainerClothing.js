import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductsPresentational from "./ProductsPresentational";
import { db } from "../../../db/firebase";
import {getDocs, collection, query, where} from "firebase/firestore"


function ProductsContainerClothing() {

    const {catId} = useParams()
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const resultado = useParams() 
    


    
    useEffect(() => {
        const productsCollection = collection (db, "products")

         const requestFilter = query(
             productsCollection,
              where("category","==",`${catId}`)
              )
         const request = getDocs(requestFilter)

        

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
                // res(productosHardcordeados)
            }, 2000)
        })

        return pedido
    }

    return (
        <ProductsPresentational data={data} />
    )

}

export default ProductsContainerClothing