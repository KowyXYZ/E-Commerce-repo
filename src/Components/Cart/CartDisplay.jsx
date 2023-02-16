import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeAllCart, totalAmount } from '../../store/sliceCart'
import CartCard from './CartCard'

function CartDisplay() {


    const {cart} = useSelector((state) => state.cart)
    const {cartTotalAmount} = useSelector((state) => state.cart)
    const {cartTotalQuantity} = useSelector((state) => state.cart)
    const dispatch = useDispatch()


  useEffect(() => {
    
  }, [dispatch(totalAmount())])

  return (
    <div>

      {cart.length > 0 ? <div>
        <div className='flex justify-between items-center'>
        <button
       onClick={() => dispatch(removeAllCart())}
       className='mt-12 bg-[#3C9379] py-2 px-3 text-[white] rounded-2xl text-[20px]'>Remove All Items</button>
      <p className='mt-12 bg-[#3C9379] py-2 px-3 text-[white] rounded-2xl text-[20px]'>Total items & quantity in cart: {cartTotalQuantity}</p>
       <p className='mt-12 bg-[#3C9379] py-2 px-3 text-[white] rounded-2xl text-[20px]'>Total amount: ${cartTotalAmount}</p>
          </div>
      
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
