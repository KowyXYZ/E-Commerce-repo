import React, { useEffect, useState } from "react";

  // import Swiper JS
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Pagination, Autoplay, Navigation } from "swiper";

  // import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  

import fetchAllProducts from '../../utilities/fetchAllProducts'

import TopProductsSingle from "./TopProductsSingle";

function TopProducts() {

  const [product, setProduct] = useState([])
  
  
  useEffect(() => {
    fetchAllProducts().then(data => setProduct(data.products))
  }, [])

  const sliced = product.slice(1, 11)

  return (
    <div className='flex flex-col justify-center items-center mt-32'>   
        <h1 className='font-semibold text-center  text-[25px]'>Populer Products From All Brands</h1>
        <div className='hidden md:flex justify-center items-center container mx-auto '>
            <Swiper
            slidesPerView={3}
 
  
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination,]}
            className='w-screen'
            >

            {sliced?.map(
              (el, index) => {
                return(
                  <SwiperSlide key={index}>
                  <TopProductsSingle data={el} key={index}/>
                  </SwiperSlide>
                )
              }
            )}

        
          </Swiper>

        </div>

        <div className='md:hidden flex justify-center items-center container mx-auto '>
            <Swiper
            slidesPerView={1}
 
  
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination,]}
            className='w-screen'
            >

            {sliced?.map(
              (el, index) => {
                return(
                  <SwiperSlide key={index}>
                  <TopProductsSingle data={el} key={index}/>
                  </SwiperSlide>
                )
              }
            )}

        
          </Swiper>

        </div>
    </div>  
  )
}

export default TopProducts
