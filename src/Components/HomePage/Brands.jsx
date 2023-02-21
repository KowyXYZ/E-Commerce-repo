import React from 'react'
import {useSelector} from 'react-redux'
//Assets
import brands from '../../Assets/Brands/Brands.png'

function Brands() {

  const { isActive } = useSelector((state) => state.background)


  return (
    <div className='text-center mt-24 flex flex-col items-center justify-center space-y-12'>
      <h1 className='font-semibold text-[25px]'>We Collaborate With 250++ Leading Top<br/> E Commerce and Brands</h1>
      <div className='border-2 border-[#fff] p-12 rounded-3xl bg-[#fff]'>
        <img src={brands} draggable={false} alt="ok" />
      </div>
    </div>
  )
}

export default Brands
