import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//Assets
import logo from '../Assets/NavBar/Logo.png'
import lightMode from '../Assets/NavBar/lightMode.png'
import darkMode from '../Assets/NavBar/sleep-mode.png'
import close from '../Assets/NavBar/close.png'
import ham from '../Assets/NavBar/hamburger.png'


import { setActive } from '../store/sliceBackground'




function NavBar() {


  const { cart } = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  const { isActive } = useSelector((state) => state.background)

  {isActive ? document.body.style.backgroundColor = '#212121' : document.body.style.backgroundColor = 'white'}
  {isActive ? document.body.style.color = '#fff' : document.body.style.color = '#000'}

  const [toggle, setToggle] = useState(false)
  
  const anon = () => {

  }


  return (
    <div className='flex justify-between flex-row mx-10 relative '>




        <div className='flex items-center justify-center '>
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
              {isActive ? <img className='w-[50px] invert' alt='wewe' onClick={() => dispatch(setActive(false))} src={darkMode}/> : <img className='w-[50px]' alt='ok' onClick={() => dispatch(setActive(true))} src={lightMode}/>}
            </button>
        </div>
      
        <div className='md:hidden flex items-center justify-center'>
          {!toggle ? <img onClick={() => setToggle(!toggle)} className='w-[50px]' src={ham}/> : <img className='w-[50px]' onClick={() => setToggle(!toggle)} src={close}/>}
          <div className='md:hidden flex flex-col  space-y-2 w-full z-10 bg-[#fff] items-center justify-center text-center'>
              {toggle ? <div className='absolute top-16 left-[2px] flex flex-col  space-y-2 w-full bg-[#fff] border-2 border-[#fff] items-center justify-center text-center text-[20px]'>
                <NavLink className='bg-[#3c9379] w-full p-4' onClick={() => setToggle(false)} to='/'>Home</NavLink>
                <NavLink className='bg-[#3c9379] w-full p-4' onClick={() => setToggle(false)} to='/about'>About</NavLink>
                <NavLink className='bg-[#3c9379] w-full p-4' onClick={() => setToggle(false)} to='/products'>Products</NavLink>
                <NavLink className='bg-[#3c9379] w-full p-4' onClick={() => setToggle(false)} to='/cart'>Cart</NavLink>
                <div className='flex p-4 bg-[#3c9379]  gap-10 items-center justify-center w-full'>
                <p className={isActive ? 'border-2 bg-[#3c9379] px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#fff]' : 'border-2 border-[#fff] px-3 py-2 rounded-3xl transition-all ease-in-out delay-100 text-[#fff]'}>Cart items: {cart.length}</p>
                <button className=' items-center justify-center text-center'>
              {isActive ? <img className='w-[50px] invert' alt='wewe' onClick={() => dispatch(setActive(false))} src={darkMode}/> : <img className='w-[50px]' alt='ok' onClick={() => dispatch(setActive(true))} src={lightMode}/>}
            </button>
                </div>
                
              </div> : <></>}
          </div>
          
        </div>

        
          


      
    </div>
  )
}

export default NavBar
