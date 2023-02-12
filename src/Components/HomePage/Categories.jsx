import React, { useEffect, useState } from 'react'

import fetchCategories from '../../utilities/fetchCategories'

function Categories() {


  const [category, setCategory] = useState([])

  const sliced = category.slice(0, 5)

  useEffect(() => {
    fetchCategories().then((data) => setCategory(data))
  }, [])

  return (
    <div className='flex flex-col items-center justify-center space-y-12 mt-32 pb-12'>
        <h1 className='font-semibold text-[20px] text-center'>Browse Categories of The Store</h1>

        <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row gap-10 pb-12'>
            {sliced.map(
                (el, index) => {
                  return (
                    <div key={index} className='flex w-[250px] h-[250px] bg-[rgba(0,0,0,0.5)] items-center justify-center rounded-3xl'>
                      <h1>{el}</h1>
                    </div>
                  )
                }
              )}
          </div>
            <div className='flex items-center justify-center '>
              <h1 className='transition-all ease-in-out delay-100 text-center border-2 border-[#3C9379] bg-[#3C9379] text-[#fff] px-6 py-2 rounded-3xl hover:bg-[#fff] hover:text-[#3C9379]'>See more...</h1>
            </div>
            
        </div>
    </div>
  )
}

export default Categories
