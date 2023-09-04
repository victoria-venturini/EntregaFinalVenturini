// import React from 'react'
// import {useState} from 'react'

// const ItemCount = ({stock, initial, onAdd})=> {
// const [quantity, setQuantity] = useState(initial)

// const increment = () => {
//   if (quantity < stock) {
//     setQuantity(quantity+1)
//   }
// }

// const decrement = () => {
//   if (quantity > stock) {
//     setQuantity(quantity-1)
//   }
// }

// return (
//   <div className='counter'>
//     <div className='controls'>
//       <button className='Button' onClick={decrement}>-</button>
//       <h4 className='number'>{quantity}</h4>
//       <button className='Button' onClick={increment}>+</button>
//     </div>
//     <div>
//       <button className='Button' onClick={() => onAdd(quantity)}> 
//       Agregar al carrito
//       </button>
//     </div>
//   </div>
// )
// }

// export default ItemCount