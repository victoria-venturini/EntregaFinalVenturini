import { Route, Routes } from "react-router-dom";
import CartContainer from "../../../../screens/Cart/CartContainer";
import ProductsItems from "../../../../screens/Products/ProductsItems/ProductsItems";
import ProductsContainer from "../../../../screens/Products/ProductsList/ProductsContainer";

function Main() {
  const dark = false;

  return (
    <main
      className={
        dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"
      }
    >
      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="/cat/:id" element={<ProductsContainer />} />
        <Route path="/item/:id" element={<ProductsItems />} />
        <Route path="/carrito" element={<CartContainer />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </main>
  );
}

export default Main;
