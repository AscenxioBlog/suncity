import React from 'react'
import Contact2 from './Contact2'
import Contact3 from './Contact3'

function Contact1() {
  return (
    <div>
      
        <div className='bg-blue-500 h-[330px] md:h-[540px] lg:h-[500px] flex justify-center items-center flex-col main-background mb-[70px] md:mb-[80px] lg:mb-[110px]'>
            <p className='text-white text-[50px] md:text-[55px] lg:text-[60px] font-bold '>Contact Us</p>
            <p className='text-white text-[16px] font-bold tracking-wider'>HOME / CONTACT</p>
        </div>

        <Contact2/>
        <Contact3/>

    </div>
  )
}

export default Contact1
