import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

function RootLayout() {
  return (
    <div>
      <div className='container mx-auto pt-6'>
        <NavBar/>
      </div>

      <div className='container mx-auto'>
        <Outlet/>
      </div>

      <div className='container mx-auto mt-20 pb-6'>
        <Footer/>
      </div>
    </div>
  )
}

export default RootLayout
