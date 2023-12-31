import NavBar from "../NavBar/NavBar";
import KiraLogo from "../../../../assets/KiraLogo.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      id="header"
      className="header flex justify-between py-4 px-2 bg-rose-200 text-slate-600"
    >
      <Link to="/">
        <img src={KiraLogo} className="w-auto h-20" alt="Kira Logo" />
      </Link>
      <NavBar />
    </header>
  );
}
export default Header;
