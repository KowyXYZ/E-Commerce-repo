import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLoaderData, useParams } from 'react-router-dom'
import { getCartItems } from '../../store/sliceCart'
import { Rate } from 'antd';


function SingleProduct() {
    
    const { id } = useParams()

    const loader = useLoaderData()

    const dispatch = useDispatch()
  
    const { isActive } = useSelector((state) => state.background)



  return (
    <div>
      <div className={isActive ? 'bg-[#303030] flex items-center justify-center drop-shadow-2xl mt-14 rounded-3xl p-12 flex-row gap-12 text-[#d6d6d6]' : 'bg-[#3C9379] flex items-center justify-center drop-shadow-2xl mt-14 rounded-3xl p-12 flex-row gap-12'}>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <img className='rounded-2xl object-contain h-56 w-96' src={loader.thumbnail} alt="sslikica" />
          <Rate disabled defaultValue={loader.rating} />
          <p>Rating: {loader.rating}</p>
        </div>
        
        <div className='flex flex-col items-center text-center justify-center text-[18px] space-y-4'>
          <p className='opacity-80'>{loader.brand}</p>
          <p className='font-bold text-[25px]'>{loader.title}</p>
          <p className='font-light '>{loader.description}</p>
          <p className='font-bold'>${loader.price}</p>

          <div className='p-4'>
         <button 
         onClick={() => dispatch(getCartItems(loader))}
         className='transition-all delay-75 ease-in-out bg-[#fff] px-24 py-2 rounded-3xl hover:bg-[#3c9379] border-2 border-[#fff] text-black' >Add To Cart</button>
        </div>
        </div>
       
        
        

      </div>
      
    </div>
  )
}


export const singleProductLoader = async( {params} ) => {
    const { id } = params
    let data = await fetch(`https://dummyjson.com/products/${id}`)
    return data.json()
}

export default SingleProduct
