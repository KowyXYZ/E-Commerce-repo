import React from 'react'

import Logo from '../Assets/NavBar/Logo.png'



function Footer() {
  
  return (
    
    <div className='flex flex-col items-center justify-center'>
        <div className='flex justify-between items-center text-center md:flex-row flex-col'>
      <div className='space-y-4 flex items-center justify-center flex-col mb-12'>
        <img src={Logo} alt="" />
        <p className=' text-center md:text-start w-[300px] md:w-[500px]'>Bachira is an online store dealing with all product
Bachira provide cheap, high quality, products to
customers</p>
      </div>



      <div className='flex gap-10 flex-col md:flex-row'>
        <div>
            <h1>For Begginer</h1>
            <div className='text-[16px] font-light space-y-1 mt-2'>   
                <p>About</p>
                <p>Career</p>
                <p>Promotion</p>
            </div>
           
        </div>


        <div>
            <h1>Overview</h1>
            <div className='text-[16px] font-light space-y-1 mt-2'>   
                <p>Product</p>
                <p>Categories</p>
                <p>Pricing</p>
            </div>
        </div>

        <div>
            <h1>Explore Us</h1>
            <div className='text-[16px] font-light space-y-1 mt-2'>   
                <p>Our Career</p>
                <p>Privacy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>

        <div>
            <h1>Contact Us</h1>
            <div className='text-[16px] font-light space-y-1 mt-2'>   
                <p>support@bachira.com</p>
                <p>021 - 555 -456</p>
                <p>Sudirman, South Jakarta</p>
            </div>
        </div>
      </div>

    </div>

      <div className='flex items-center justify-center mt-12'>
      Copyright 2023 • @Kowy
      </div>
    </div>
  )
}

export default Footer
