import React from 'react'
import NavBar from './NavBar'

function Footer() {
  return ( 
    <footer id= "footer" className="footer flex justify-between py-4 px-2 bg-slate-800 text-white"> 
        <p> &copy; Copyright 2023 Kira Indumentaria </p>
        <NavBar/>
    </footer>
  )
}

export default Footer