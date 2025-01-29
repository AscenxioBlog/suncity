import React from 'react'
import AboutPage2 from './AboutPage2'
import Aboutpage3 from './Aboutpage3'
import AboutPage4 from './AboutPage4'
import AboutPage5 from './AboutPage5'
import AboutPage6 from './AboutPage6'

function AboutPage1() {
  return (
    <div className='overflow-x-hidden '>
      
      <div className='bg-blue-500 h-[330px] md:h-[540px] lg:h-[500px] flex justify-center items-center flex-col main-background mb-[70px] md:mb-[80px] lg:mb-[110px]'>
            <p className='text-white text-[50px] md:text-[55px] lg:text-[60px] font-bold '>About Us</p>
            <p className='text-white text-[16px] font-bold tracking-wider'>HOME / ABOUT US</p>
        </div>

        <AboutPage2/>
        <Aboutpage3/>
        <AboutPage4/>
        <AboutPage5/>
        <AboutPage6/>

    </div>
  )
}

export default AboutPage1
