import React from 'react'

//assets
import logo from '../Assets/NavBar/Logo.png'

function About() {
  return (
    <div className='text-center flex items-center justify-center h-screen flex-col space-y-12'>
      <h1 className='text-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores suscipit sit accusantium.</h1>
    
      <img className='border-2 border-[#fff] bg-[#fff] px-6 py-2 rounded-2xl' src={logo} alt="" />
    </div>
  )
}

export default About
