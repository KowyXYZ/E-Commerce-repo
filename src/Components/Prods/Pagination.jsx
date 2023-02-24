import React from 'react'
import { useSelector } from 'react-redux'

function Pagination({totalPosts, postsPerPage, setCurrentPage}) {

    let pages = []

    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }

    const { isActive } = useSelector((state) => state.background)

  return (
    <div className='gap-10'>
      {pages.map(
        (el, index) => {
            return(
                <button 
                className={isActive ? 'border-2 border-[#3c9379] px-3 py-2 bg-[#3c9379] shadow-2xl mt-8 md:mt-12 mx-4' : 'border-2 border-[#3c9379] px-3 py-2 bg-[#fff] shadow-2xl mt-12 m-4'}
                onClick={() => setCurrentPage(el)}
                key={index}>{el}</button>
            )
        }
      )}
    </div>
  )
}

export default Pagination
