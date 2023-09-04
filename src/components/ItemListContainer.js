import { useState, useEffect } from 'react'
import { getProducts } from './AsyncMock';
import ItemList from './ItemList'

function ItemListContainer() {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState (true)

  useEffect(() => {
    getProducts()
    .then(response => setProducts(response))
    .finally(()=> setLoading (false))
   } ,[])

    
         return (
          <div>
            {loading ? <h2>Cargando</h2> : <ItemList/>}
          </div>

    )
    
  }
  
  export default ItemListContainer;