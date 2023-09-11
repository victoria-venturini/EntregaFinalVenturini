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
                return product 
                })
                setData(aux)
            })
        .catch((error)=>{
        })


        getAllProducts()
        .then(res=>{
            setData(res)
        })
    }, [resultado.id])


    const getAllProducts = () => {
        const pedido = new Promise((res, rej) => {
        })

        return pedido
    }

    return (
        <ProductsPresentational data={data} />
    )

}

export default ProductsContainerClothing