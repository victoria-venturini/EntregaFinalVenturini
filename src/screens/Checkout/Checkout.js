import React from 'react'
import { Link } from 'react-router-dom'

export const Checkout = ({ order }) => {
  return (
    <div className='text-center my-64 flex flex-col space-y-60'>
      <h1 className="text-center my-3 text-xl font-bold">
       Su orden ha sido procesada
       El numero de seguimiento de su compra es:
       <h2 className="shadow-lg shadow-rose-400/50 'border-2 p-3 mx-64 text-slate-800 font-semibold  uppercase rounded-lg">100OMxs2rXC14qtOmZo7 {order}</h2> 
      </h1>
        <Link to="/" className='shadow-lg shadow-rose-400/50 p-3 bg-rose-200 mx-64 text-slate-800 font-semibold  uppercase rounded-lg'>Volver a comprar </Link>
    </div>
  )
}

export default Checkout