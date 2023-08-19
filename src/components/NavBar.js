import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'



function NavBar() {
  return (
    <nav className = "flex gap-24">
    
    <Link to ="/cat/1">Categoria 1</Link>   
    <Link to ="/cat/2">Categoria 2</Link>
    <Link to="/ubicacion">Ubicacion</Link>
    <Link to="/contacto">Contacto</Link>
    <CartWidget/>
   </nav>
  )
}

export default NavBar

{/* <i className='material-icons'>widgets</i> */}