import React from 'react'

function TopProductsSingle(props) {
  return (
    <div className='bg-[#fff] text-center items-center flex justify-center flex-col p-24'>
        <h1 className='font-bold'>{props.data.title}</h1>
        <img className='object-contain h-64 w-96 rounded-3xl' src={props.data.thumbnail} alt="slkika" />
        <p>${props.data.price}</p>
    </div>
  )
}

export default TopProductsSingle
