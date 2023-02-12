import React from 'react'

//Assets
import brands from '../../Assets/Brands/Brands.png'

function Brands() {
  return (
    <div className='text-center mt-24 flex flex-col items-center justify-center space-y-12'>
      <h1 className='font-semibold text-[25px]'>We Collaborate With 250++ Leading Top<br/> E Commerce and Brands</h1>
      <div>
        <img src={brands} draggable={false} alt="ok" />
      </div>
    </div>
  )
}

export default Brands
