import React, {useEffect, useState} from 'react'
import fetchAllProducts from '../../utilities/fetchAllProducts'

import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/sliceProducts'
import ProductCard from './ProductCard'
import fetchCategories from '../../utilities/fetchCategories'
import { getCategory } from '../../store/sliceCategory'


function AllProducts() {

    const dispatch = useDispatch()

    useEffect(() => {
        fetchAllProducts().then((data) => dispatch(getData(data.products)))
        fetchCategories().then((cats) => dispatch(getCategory(cats)))
    }, [])

    const {data} = useSelector((state) => state.products)
    const {categories} = useSelector((state) => state.category)    

    const [cats, setCats] = useState('')
    
    const filtered = data.filter((item) => item.category === cats)

  return (
    <div className='mt-12'>
        <div className='flex gap-10 flex-wrap justify-center items-center text-center'>
            {categories.map(
                (el, index) => {
                    return(
                        <button
                        onClick={() => setCats(el)}
                        className='bg-[#fff] border-[#3C9379] border-2 px-3 py-2 drop-shadow-2xl'
                        >{el}</button>
                    )
                }
            )}
        </div>
        

        <div className='flex flex-wrap gap-10 mt-12 justify-center items-center'>
            {filtered.map(
                (el, index) => {
                    return(
                        <ProductCard data={el} key={index}/>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default AllProducts