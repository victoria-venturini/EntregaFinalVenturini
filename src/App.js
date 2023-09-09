import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout/Layout";
import { ProductsProvider } from "./context/ProductsContext";
// import "./db/migration";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Layout />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
