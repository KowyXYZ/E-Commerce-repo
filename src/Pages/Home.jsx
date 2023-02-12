import React from 'react'
import Brands from '../Components/HomePage/Brands'
import Categories from '../Components/HomePage/Categories'
import HeroSection from '../Components/HomePage/HeroSection'
import TopProducts from '../Components/HomePage/TopProducts'
import WhyChoose from '../Components/HomePage/WhyChoose'

function Home() {
  return (
    <div>
      <HeroSection/>
      <Brands/>
      <Categories/>
      <WhyChoose/>
      <TopProducts/>
    </div>
  )
}

export default Home
