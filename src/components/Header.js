import CartWidget from "./CartWidget"
import NavBar from "./NavBar"
import KiraLogo from "../assets/KiraLogo.webp";
import MenuProductos from "./MenuProductos";

function Header () {
    return (
        <header id="header" className="header flex justify-between py-4 px-2 bg-slate-800 text-white">
           <img src={KiraLogo} className="w-auto h-20" alt="Kira Logo" />
           <NavBar/>
           <MenuProductos/>
           <CartWidget/>
        </header>
    )
}
export default Header