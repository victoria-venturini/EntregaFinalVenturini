import React from 'react'
 import Item from './Item'

 const ItemList = ({products}) => {
     return (
        <div className='ListGroup'>
            {products.map (prod => <Item Key={prod.id} {...prod}/>)}
            <Routes>
            <Route path= "/item/:id" element={<ItemDetail/>}> </Route>
            </Routes>
        </div>
    )
 }




 export default ItemList

