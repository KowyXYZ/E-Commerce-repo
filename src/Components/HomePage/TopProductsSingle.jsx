import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function TopProductsSingle({data}) {
  const { isActive } = useSelector((state) => state.background)


  return (
    <div className={isActive ? 'bg-[#303030] border-2 border-[#303030] shadow-2xl rounded-3xl text-center items-center flex justify-center flex-col p-3 m-12' : 'bg-[#fff] border-2 border-[#e3e3e3e] shadow-2xl rounded-3xl text-center items-center flex justify-center flex-col p-3 m-12'}>
      <Link to={`/products/product/${data.id}`}>
      <h1 className='font-bold'>{data.title}</h1>
        <img className='object-contain h-64 w-96 rounded-3xl' src={data.thumbnail} alt="slkika" />
        <p>${data.price}</p>
      </Link>
        
    </div>
  )
}

export default TopProductsSingle
