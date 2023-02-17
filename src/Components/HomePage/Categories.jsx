import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {


  const categories = ['smartphones', 'laptops', 'skincare', 'groceries', 'fragnances']



  return (
    <div className='flex flex-col items-center justify-center space-y-12 mt-32 pb-12'>
        <h1 className='font-semibold text-[20px] text-center'>Browse Categories of The Store</h1>

        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-10 pb-12'>
            {categories.map(
                (el, index) => {
                  return (
                    <Link to='/products'>
                    <div key={index} className='flex w-[250px] h-[250px] bg-[#3c9379] font-semibold items-center justify-center rounded-3xl'>
                      <h1 key={index}>{el}</h1>
                    </div>
                    </Link>
                  )
                }
              )}
          </div>
            <div className='flex items-center justify-center '>
              <Link to='/products' className='transition-all ease-in-out delay-100 text-center border-2 border-[#3C9379] bg-[#3C9379] text-[#fff] px-6 py-2 rounded-3xl hover:bg-[#fff] hover:text-[#3C9379]'>See more...</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Categories
