import { useContext, useEffect, useState} from "react";
import ProductsPresentational from "./ProductsPresentational";
import { db } from "../../../db/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ProductsContext } from "../../../context/ProductsContext";


function ProductsContainer() {
  const { products, setAllProducts } = useContext(ProductsContext);

  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        
        const productsSnapshot = await getDocs(productsCollection);
          const products = productsSnapshot.docs.map((doc) => {
          const product = doc.data();
          product.id = doc.id;
          return product;
        });
        setAllProducts(products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return <ProductsPresentational data={products} />;
}

export default ProductsContainer;