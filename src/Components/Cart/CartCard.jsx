import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { decreaseCartItem, getCartItems, removeFromCart } from '../../store/sliceCart'

function CartCard( {data} ) {

    const dispatch = useDispatch()
    const { isActive } = useSelector((state) => state.background)


  return (
    <div className={isActive ? 'flex flex-row items-center justify-center bg-[#303030] p-12 rounded-2xl my-12 text-[#d6d6d6] font-semibold' : 'flex flex-row items-center justify-center bg-[#3C9379] p-12 rounded-2xl my-12 font-semibold'}>
        <Link to={`/products/product/${data.id}`}>
        <div className='flex items-center justify-center flex-col space-y-2'>
                <h1>{data.title}</h1>
                <img className='object-contain h-56 w-96' src={data.thumbnail} alt="slicica" />
        </div>
        </Link>
        
          
        <div className='flex gap-24 items-center justify-center'>
            <p>Price: ${data.price}</p>
            <p
            className='border-2 border-[#fff] px-2 rounded-3xl bg-[#fff] font-bold text-[25px] text-black'
            onClick={() => dispatch(getCartItems(data))}>+</p>
            <p>Items: {data.cartItems}</p>
            <p
              className='border-2 border-[#fff] px-2 rounded-3xl bg-[#fff] font-bold text-[25px] flex-1 text-black'
            onClick={() => dispatch(decreaseCartItem(data))}>-</p>
            <p>Total: ${data.price * data.cartItems}</p>
            <p 
            onClick={() => dispatch(removeFromCart(data))}
            className='transition-all delay-75 ease-in-out border-[#fff] font-bold text-[20px] border-2 px-2  rounded-2xl bg-[#fff] text-black'>X</p>
        </div>
        
      
    
    </div>
  )
}

export default CartCard
