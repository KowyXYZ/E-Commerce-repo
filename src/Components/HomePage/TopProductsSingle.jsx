import React from 'react'
import { Link } from 'react-router-dom'

function TopProductsSingle({data}) {
  return (
    <div className='bg-[#fff] text-center items-center flex justify-center flex-col p-24'>
      <Link to={`/products/product/${data.id}`}>
      <h1 className='font-bold'>{data.title}</h1>
        <img className='object-contain h-64 w-96 rounded-3xl' src={data.thumbnail} alt="slkika" />
        <p>${data.price}</p>
      </Link>
        
    </div>
  )
}

export default TopProductsSingle
