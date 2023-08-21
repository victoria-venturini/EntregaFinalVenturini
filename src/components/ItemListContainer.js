import { useState, useEffect } from 'react'
import { getProducts } from './AsyncMock';
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProducts(response)
    })
  }, [])

    
         return (
            <ItemList/>
    )
    
  }
  
  export default ItemListContainer;