import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="flex gap-24">
      <Link to="/cat/clothing">Ropa</Link>
      <Link to="/cat/electronics">Electronica</Link>
      <Link to="/cat/jewelery">Joyas</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
