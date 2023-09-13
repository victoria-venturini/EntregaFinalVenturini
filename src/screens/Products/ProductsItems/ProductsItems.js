import { useParams } from "react-router-dom";
import Contador from "../../../components/Counter/Counter";
import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

const ProductsItems = () => {
  const params = useParams();

  const { getProductById } = useContext(ProductsContext);

  const product = getProductById(params.id);

  return (
    <div className="flex"> 
      <img src={product.image} alt="" style={{ height: "10%", width: "10%" }} />
      <p>
      <p className='shadow-lg shadow-rose-400/50 p-3 w-auto h-auto text-slate-800 font-bold  uppercase rounded-lg'>{product.title}</p>
      <p className="m-auto bg-red-50 shadow-lg  shadow-indigo-500/50 h-auto rounded shadow-rose-400/50 p-20 font-semibold text-md text-slate-600">{product.description}</p>
      </p>
      
      <Contador product={product} />
    </div>
  );
};


export default ProductsItems;
