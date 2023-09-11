import { Link } from "react-router-dom";

function ProductsPresentational(props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {props.data.length === 0 ? (
        <p> cargando </p>
      ) : (
        props.data.map((item, i) => {
          return (
            <article
              key={i}
              className="card shadow-md p-4 rounded-md duration-300 transition hover:scale-110"
            >
              <h2 className="overflow-hidden text-ellipsis truncate mb-4 font-semibold text-md text-slate-600">
                {item.title}
              </h2>
              <img
                src={item.image}
                alt={item.title}
                className="h-[200px] w-full object-contain"
              />
              <Link to={`/item/${item.id}`} className=" w-56 h-16 flex m-auto text-center font-semibold text-md text-slate-600">${item.price}</Link>
            </article>
          );
        })
      )}
    </section>
  );
}

export default ProductsPresentational;
