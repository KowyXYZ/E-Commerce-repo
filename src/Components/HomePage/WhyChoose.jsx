import React from 'react'

import firstIcon from '../../Assets/WhyChoose/icon1.png'
import scndICon from '../../Assets/WhyChoose/Icon2.png'
import thirdIcon from '../../Assets/WhyChoose/Icon3.png'


function WhyChoose() {


  return (
    <div className='flex items-center flex-col justify-center mt-12'>
        <h1 className='font-semibold text-[30px]'>Why Choose Ba<span className='text-[#3C9379]'>chira?</span></h1>
        <div className='flex mt-12'>
            <div className='flex flex-col space-y-3 items-center justify-center text-center'>
                <img className='w-[80px]' src={firstIcon} alt="icon" />
                <p className='font-bold'>Free Delivery</p>
                <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetu
                adipiscing elit, sed do eiusmod tempor</p>
            </div>

            <div className='flex flex-col space-y-3 items-center justify-center text-center'>
                <img className='w-[80px]' src={scndICon} alt="icon2" />
                <p className='font-bold'>Trusted Platform</p>
                <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetu
                adipiscing elit, sed do eiusmod tempor</p>
            </div>

            <div className='flex flex-col space-y-3 items-center justify-center text-center'>
                <img className='w-[80px]' src={thirdIcon} alt="icon3" />
                <p className='font-bold'>Hero For You</p>
                <p className='w-1/2'>Lorem ipsum dolor sit amet, consectetu
                adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose
