import React from 'react'
import { Outlet } from 'react-router-dom'
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
    </div>
  )
}

export default RootLayout
