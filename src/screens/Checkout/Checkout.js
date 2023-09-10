import React, { useContext, useState } from 'react'
import { Timestamp, addDoc, collection, documentId, getFirestore, query } from "firebase/firestore";
import {db} from "../../db/firebase"
import CheckoutForm from "./CheckoutForm/CheckoutForm"
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState ('')

    const {cart, total, clearCart} = useContext (CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)
        try{
            const objOrder = {
                client: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(newDate())
            }
            const batch = writeBatch (db)

            const outOfStock = []

            const ids = cart.map (prod => prod.id)

            const productsRef = productsCollection (db, "products")

            const productsAddedFromFirestore = await getDocs (query(productsRef, where, (documentId(),'in', id)))
       
            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = docData()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb>= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})  
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = productsCollection (db, 'orders')
                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId (orderAdded.id)
                clearCart()
            } else {
                console.error("Producto fuera de stcok");
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h3>Se esta generando su compra</h3>
    }

    if (orderId) {
        return <h3> El numero de seguimiento de su compra es: {orderId}</h3>
    }

    return (
        <div>
            <h3>Checkout</h3>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout