import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [], total: 0, totalProducts: 0 })

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  console.log(cart)
  const [total, setTotal] = useState(0)
  console.log(total)
  const [totalProducts, setTotalProducts] = useState(0)
  console.log(totalProducts)

  const addProd = (product, quantity) => {
    //recibir IdProductor 
    console.log('idproducto', product)
    const prodInCart = cart.find((prod) => prod.id === product.id)
    if (prodInCart) {
      if (totalProducts.quantity + quantity > product.stock) {
        const availableQuan = product.stock - prodInCart.quantity;
        if (availableQuan > 0) {
          addProd(product, availableQuan)
          console.log("agregado")
        } else {
          console.log("no hay stock")
        }
        return
      }
      const cartUpdated = cart.map((prod) => {
        if (prod.id === product.id) {
          return { ...prod, quantity: prod.quantity + quantity }
        } else {
          return prod;
        }
      })
      setCart(cartUpdated)
      setTotalProducts((prev)=> prev + quantity)
      setTotal((prev)=> prev + product.price * quantity)
    }else{
      if(quantity> product.stock){
        console.log('se agregaron más unidades al carrito')
        addProd(product, product.stock)
        return;
      }
      setCart((prev)=>[...prev, {product, quantity}])
      setTotalProducts((prev) => prev + quantity)
      setTotal((prev)=> prev + product.price * quantity)
    }
  }

  const removeProd = (id, quantity) =>{
    const product = cart.find((prod)=> prod.id === id)
    if(product){
      if(quantity < product.quantity){
        product.quantity -= quantity
        setTotalProducts((prev)=> prev - quantity)
        setTotal((prev)=> prev - product.price * product.quantity)

        return product.quantity;
      }else{
        const cartUpdated = cart.filter((prod)=> prod.id !== id)
        setCart(cartUpdated)
        setTotalProducts((prev)=> prev - product.quantity)
        setTotal((prev)=> prev - product.price * product.quantity)

        return 0;
      }
    }else{
      return -1;
    }
  }

  const clearCart = ()=>{
    setCart([])
    setTotalProducts(0)
    setTotal(0)
  }


  return (
    <CartContext.Provider value={{ cart, addProd, removeProd, clearCart, total, totalProducts }}>
      {children}
    </CartContext.Provider>
  )
}