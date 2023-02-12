import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
      </div>

      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout
