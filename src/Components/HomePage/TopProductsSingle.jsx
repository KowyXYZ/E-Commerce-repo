import React from 'react'

function TopProductsSingle( {data}) {
  return (
    <div className='bg-[#fff] text-center items-center flex justify-center flex-col p-24'>
        <h1 className='font-bold'>{data.title}</h1>
        <img className='object-contain h-64 w-96 rounded-3xl' src={data.thumbnail} alt="slkika" />
        <p>${data.price}</p>
    </div>
  )
}

export default TopProductsSingle
