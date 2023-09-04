import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { contexto } from "./miContexto"
import { CartContext } from "./CartContext"

function CartWidget() {

  const valorDelContexto = useContext(CartContext)

  return (
    <NavLink to="/carrito">
        <i className="material-icons">shopping_cart</i>
        <span>{valorDelContexto.totalProducts}</span>
    </NavLink>
  )
}

export default CartWidget