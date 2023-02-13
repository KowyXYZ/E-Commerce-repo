import React from 'react'

function ProductCard({data}) {
  return (
    <div className=' rounded-3xl flex flex-col items-center justify-center bg-[#fff] drop-shadow-2xl p-2'>
        <p className='opacity-60'>In stock: {data.stock}</p>
        <img className='rounded-3xl object-contain h-56 w-96' src={data.thumbnail} alt="slika" />
        <h1>{data.title}</h1>
        <p>${data.price}</p>
    </div>
  )
}

export default ProductCard