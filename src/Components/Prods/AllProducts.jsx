import React, {useEffect, useState} from 'react'
import fetchAllProducts from '../../utilities/fetchAllProducts'

import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/sliceProducts'
import ProductCard from './ProductCard'
import fetchCategories from '../../utilities/fetchCategories'
import { getCategory } from '../../store/sliceCategory'
import Pagination from './Pagination'


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

    const [catsEn, setCatsEn] = useState(false)

    const anomaly = (el) => {
        setCats(el)
        setToggle(true)
    }

    const allCats = (ele) => {
        setToggle(false)
        setCurrentPage(1)
    }


    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(12)

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = data.slice(firstPostIndex, lastPostIndex)

    const { isActive } = useSelector((state) => state.background)


  return (
    <div className='mt-12'>
        <div className='flex gap-10 flex-col justify-between items-center text-center'>
            <div className='flex gap-10'>

            {catsEn ? <button 
                className='border-2 border-red-500 px-3 py-2 rounded-3xl'
                onClick={() => setCatsEn(!catsEn)}>Close Categories</button> : <button className='border-2 border-[#3c9379] px-3 py-2 rounded-3xl' onClick={() => setCatsEn(!catsEn)}>Show Categories</button>}
            
            
            <div className='bg-[#3c9379] border-[#3c9379] border-2 p-2 rounded-3xl'>
                <label className='text-[18px] p-2' htmlFor="">Search: </label>
                <input 
                onChange={(e) => setSearch(e.target.value)}
                className='border-2 text-[black] border-[#000] rounded-3xl px-4 py-2' type='text'/>
            </div>
            </div>
            


            <div className='flex gap-4 flex-wrap justify-center items-center text-center'>
            {catsEn ? <button
            onClick={() => allCats()}
            className={isActive ? 'bg-[#3C9379] border-[#fff] border-2 px-3 py-2 drop-shadow-2xl rounded-3xl' : 'bg-[#fff] border-[#3C9379] border-2 px-3 py-2 drop-shadow-2xl rounded-3xl'}
            >All</button> : <></>}
                    {catsEn ? categories.map(
                (el, index) => {
                    return(
                        <button
                        onClick={() => anomaly(el)}
                        className={isActive ? 'bg-[#3C9379] border-[#3C9379] border-2 px-3 py-2 drop-shadow-2xl rounded-3xl' : 'bg-[#fff] border-[#3C9379] border-2 px-3 py-2 drop-shadow-2xl rounded-3xl'}
                        >{el}</button>
                    )
                }
            ) : <></>}
            </div>

            
            
            
           
        </div>
        
<div className='flex flex-col'>
<div className='flex flex-wrap gap-10 mt-12 justify-center items-center'>
            {toggle ? filtered.filter((item) => item.title.toLowerCase().includes(search)).map(
                (el, index) => {
                    return(
                        <ProductCard data={el} key={index}/>
                    )
                }
            ) : currentPosts.filter((item) => item.title.toLowerCase().includes(search)).map(
                (el, index) => {
                    return(
                        <div>
                             <ProductCard data={el} key={index} />
                            
                        </div>
                       
                    )
                }
            )}
            
        </div>
        <div className='flex items-center justify-center'>
              {!toggle ? <Pagination totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/> : <div></div>}
        </div>
            
</div>
        
    </div>
  )
}

export default AllProducts