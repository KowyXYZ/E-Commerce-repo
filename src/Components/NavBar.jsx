import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//Assets
import logo from '../Assets/NavBar/Logo.png'
import lightMode from '../Assets/NavBar/lightMode.png'
import darkMode from '../Assets/NavBar/sleep-mode.png'
import { setActive } from '../store/sliceBackground'

function NavBar() {


  const { cart } = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  const { isActive } = useSelector((state) => state.background)

  {isActive ? document.body.style.backgroundColor = '#212121' : document.body.style.backgroundColor = 'white'}
  {isActive ? document.body.style.color = '#fff' : document.body.style.color = '#000'}


  return (
    <div className='flex justify-between md:flex-row flex-col '>
        <div className='flex items-center justify-center'>
          <Link to='/'>
          <img className='px-6 py-2 rounded-3xl bg-[#fff]' src={logo} alt="logopng" />
          </Link>
            
          
        </div>

        <div className='md:flex flex-row hidden text-center justify-center items-center  gap-6 text-[18px]'>  
            
            <NavLink className={isActive ? 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#fff]' : 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]'} to='/'>Home</NavLink>
            <NavLink className={isActive ? 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#fff]' : 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]'} to='/about'>About</NavLink>
            <NavLink className={isActive ? 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#fff]' : 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]'} to='/products'>Products</NavLink>
            <NavLink className={isActive ? 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#fff]' : 'px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]'} to='/cart'>Cart</NavLink>
            <p className={isActive ? 'border-2 border-[#fff] px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#fff]' : 'border-2 border-[#3c9379] px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#535A56]'}>Cart items: {cart.length}</p>
            <button>
              {isActive ? <img className='w-[50px] invert' onClick={() => dispatch(setActive(false))} src={darkMode}/> : <img className='w-[50px]' onClick={() => dispatch(setActive(true))} src={lightMode}/>}
            </button>
        </div>
      
        <div className='md:hidden flex flex-col items-center justify-center'>

          <div>


          </div>

          <div>
              <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/cart'>Cart</NavLink>
          </div>
          

        </div>

      
    </div>
  )
}

export default NavBar
