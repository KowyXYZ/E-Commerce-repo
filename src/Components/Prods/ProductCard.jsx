import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCartItems } from '../../store/sliceCart'

function ProductCard({data}) {


  const dispatch = useDispatch()


  return (
    
    <div className=' rounded-3xl flex flex-col items-center justify-center bg-[#fff] drop-shadow-2xl p-2'>
        <Link to={`/products/product/${data.id}`}>
        <div className='flex items-center justify-center flex-col'>
        <p className='opacity-60'>In stock: {data.stock}</p>
        <img className='rounded-3xl object-contain h-56 w-96' src={data.thumbnail} alt="slika" />
        <h1>{data.title}</h1>
        <p>${data.price}</p>
        </div>
        
        </Link>
        <div className='p-4'>
         <button 
         onClick={() => dispatch(getCartItems(data))}
         className='transition-all delay-75 ease-in-out bg-[#3C9379] px-24 py-2 rounded-3xl hover:bg-[#fff] border-2 border-[#3c9379]' >Add To Cart</button>
        </div>
    </div>

    
   
  )
}

export default ProductCard