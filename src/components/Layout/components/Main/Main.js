import { Route, Routes } from "react-router-dom";
import CartContainer from "../../../../screens/Cart/CartContainer";
import ProductsItems from "../../../../screens/Products/ProductsItems/ProductsItems";
import ProductsContainer from "../../../../screens/Products/ProductsList/ProductsContainer";
import ProductsContainerClothing from "../../../../screens/Products/ProductsList/ProductsContainerClothing";
// import Checkout from "../../../../screens/Checkout/Checkout";

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
        <Route path="/cat/:catId" element={<ProductsContainerClothing/>}/>
        <Route path="/item/:id" element={<ProductsItems />} />
        <Route path="/carrito" element={<CartContainer />} />
        {/* <Route path="/checkout" element={<Checkout/>} /> */}
      </Routes>
    </main>
  );
}

export default Main;
