import Navlinks from "./Navlinks"

function Header () {
    return (
        <header id="header" className="header flex justify-between py-4 px-2 bg-slate-800 text-white">
           <h1>hola mi gente</h1> 
           <Navlinks/>
        </header>
    )
}
export default Header