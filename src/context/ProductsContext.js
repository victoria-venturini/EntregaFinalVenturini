import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const setAllProducts = (products) => {
    setProducts(products);
  };

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  const getProductsBySearch = (search) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const getProductsByPrice = (min, max) => {
    return products.filter(
      (product) => product.price >= min && product.price <= max
    );
  };

  const contextValue = {
    products,
    setAllProducts,
    getProductById,
    getProductsByCategory,
    getProductsBySearch,
    getProductsByPrice,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
