import React from 'react'

//Assets
import brands from '../../Assets/Brands/Brands.png'

function Brands() {



  return (
    <div className='text-center mt-24 flex flex-col items-center justify-center space-y-12'>
      <h1 className='font-semibold text-[18px] md:mx-0 mx-4 md:text-[25px]'>We Collaborate With 250++ Leading Top<br/> E Commerce and Brands</h1>
      <div className='border-2 border-[#fff] p-10 md:mx-0 mx-4 md:p-12 rounded-3xl bg-[#fff]'>
        <img  src={brands} draggable={false} alt="ok" />
      </div>
    </div>
  )
}

export default Brands
