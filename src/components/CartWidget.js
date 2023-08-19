import React from 'react'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <Link to="/carrito"> 
      <Link to="/carrito"><i className='material-icons'>shopping_cart</i>
        <span>3</span></Link>
    </Link>
   
  )
}

export default CartWidget