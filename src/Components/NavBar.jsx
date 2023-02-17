import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
//Assets
import logo from '../Assets/NavBar/Logo.png'



function NavBar() {


  const { cart } = useSelector((state) => state.cart)


  return (
    <div className='md:flex justify-between hidden'>
        <div>
          <Link to='/'>
          <img src={logo} alt="logopng" />
          </Link>
            
        </div>

        <div className=' text-center flex justify-center items-center flex-row gap-6 text-[18px]'>  
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/'>Home</NavLink>
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/about'>About</NavLink>
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/products'>Products</NavLink>
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/cart'>Cart</NavLink>
            <p className='border-2 border-[black] drop-shadow-2xl bg-[#fff] rounded-3xl px-2 top-2 right-[150px] '>Cart items: {cart.length}</p>
        </div>
      

      
    </div>
  )
}

export default NavBar
