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


    const [search, setSearch] = useState('') 
    
    const [toggle, setToggle] = useState(false)

    const anomaly = (el) => {
        setCats(el)
        setToggle(true)
    }

  return (
    <div className='mt-12'>
        <div className='flex gap-10 flex-col justify-between items-center text-center'>
            <div className='flex gap-10'>
            <button
            onClick={() => setToggle(false)}
            className='bg-[#fff]  border-[#3C9379] border-2 px-6  drop-shadow-2xl'
            >All</button>
            
            <div className='bg-[#fff] border-[#3c9379] border-2 p-2 rounded-3xl'>
                <label className='text-[18px] p-2' htmlFor="">Search: </label>
                <input 
                onChange={(e) => setSearch(e.target.value)}
                className='border-2 border-[#000] rounded-3xl px-4 py-2' type='text'/>
            </div>
            </div>
            
            <div className='flex gap-10 flex-wrap justify-center items-center text-center'>
                    {categories.map(
                (el, index) => {
                    return(
                        <button
                        onClick={() => anomaly(el)}
                        className='bg-[#fff] border-[#3C9379] border-2 px-3 py-2 drop-shadow-2xl'
                        >{el}</button>
                    )
                }
            )}
            </div>

            
            
            
           
        </div>
        

        <div className='flex flex-wrap gap-10 mt-12 justify-center items-center'>
            {toggle ? filtered.filter((item) => item.title.toLowerCase().includes(search)).map(
                (el, index) => {
                    return(
                        <ProductCard data={el} key={index}/>
                    )
                }
            ) : data.filter((item) => item.title.toLowerCase().includes(search)).map(
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