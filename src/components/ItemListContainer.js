import { useState, useEffect } from 'react'
import { getProducts } from './AsyncMock';
// import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
  }, [])

    return (
      <div className="text-center text-9xl bg-pink-300 h-screen mt-24">
        <h2 className="pt-60">{greeting}</h2>
        {/* <ItemList products={products}/> */}
      </div>
    )
  }
  
  export default ItemListContainer;