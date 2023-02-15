import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeAllCart } from '../../store/sliceCart'
import CartCard from './CartCard'

function CartDisplay() {


    const {cart} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

  return (
    <div>

      {cart.length > 0 ? <div>
        <button
       onClick={() => dispatch(removeAllCart())}
       className='mt-12 bg-[#3C9379] py-2 px-3 text-[white] rounded-2xl'>Remove All Items</button>
        {cart?.map(
          (el) => {
            return (
              <CartCard data={el} />
            )
          }
        )}
      </div> : 
      <div className='flex flex-col space-y-12 items-center justify-center h-screen'>
        <p className='text-center text-[25px] '>Your Cart is Empty</p>
        <Link 
        to='/products'
        className='border-2 border-[#3C9379] bg-[#3C9379] text-[white] px-10 py-3 rounded-3xl'>Go Shopping Now!</Link>
      </div>} 
      
    </div>
  )
}

export default CartDisplay
