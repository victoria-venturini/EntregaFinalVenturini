import { useParams } from "react-router-dom";
import Contador from "../../../components/Counter/Counter";
import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

const ProductsItems = () => {
  const params = useParams();

  const { getProductById } = useContext(ProductsContext);

  const product = getProductById(params.id);

  return (
    <div>
      <h2>Detalle</h2>
      <img src={product.image} alt="" style={{ height: "10%", width: "10%" }} />
      <p>id: {product.id}</p>
      <p>{product.description}</p>
      <Contador product={product} />
    </div>
  );
};

export default ProductsItems;
