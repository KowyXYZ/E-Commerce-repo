import React from 'react'
import { NavLink } from 'react-router-dom'

//Assets
import logo from '../Assets/NavBar/Logo.png'

function NavBar() {
  return (
    <div className='md:flex justify-between hidden'>
        <div>
            <img src={logo} alt="logopng" />
        </div>

        <div className=' text-center flex justify-center items-center flex-row gap-6 text-[18px]'>  
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/'>Home</NavLink>
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/about'>About</NavLink>
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/products'>Products</NavLink>
            <NavLink className='px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]' to='/cart'>Cart</NavLink>
        </div>
      

      
    </div>
  )
}

export default NavBar
