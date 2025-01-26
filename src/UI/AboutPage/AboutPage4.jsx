import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume,faEnvelope } from '@fortawesome/free-solid-svg-icons';
function AboutPage4() {
  return (
    <div>
      
      <div className='bg-[rgb(243,243,243)]  h-[350px] md:h-[500px] lg:h-[230px] grid grid-cols-1 lg:grid-cols-2 gap-[25px] px-[8px] md:px-[65px] lg:px-[112px] mb-[70px]'>

        <div className='bg-[rgb(23,22,27)] rounded-[15px] md:rounded-[8px] grid grid-cols-[33%,67%] md:grid-cols-[28%,72%]'>
          <div className='grid place-items-center'>
            <button className='bg-[rgb(33,32,37)] py-[16px] md:py-[35px] px-[20px] md:px-[39px] rounded-[50%]'>
              <FontAwesomeIcon icon={faPhoneVolume} className='text-white h-[20px]'/>
              </button>
          </div>

          <div>
            <p className='text-deepgreen mt-[25px] md:mt-[70px] tracking-wider'>Call Us For Service</p>
            <p className='font-bold text-white text-[17px] md:text-[30px] mt-[8px]'>(+21) 25 256.21583</p>
            <p className='text-[rgb(95,95,95)] mt-[6px] leading-[20px]'>Call 24/7 Anytime For Your Problem</p>
          </div>
        </div> 

        <div className='bg-deepgreen rounded-[15px]  md:rounded-[8px] grid grid-cols-[33%,67%] md:grid-cols-[28%,72%]'>
        <div className='grid place-items-center'>
            <button className='bg-white py-[16px] md:py-[35px] px-[20px] md:px-[39px] lg:px-[38px] rounded-[50%]'>
              <FontAwesomeIcon icon={faEnvelope} className='text-deepgreen h-[25px]'/>
              </button>
          </div>

          <div>
            <p className='text-white mt-[25px] md:mt-[70px] tracking-wider'>Mail Us Anytime</p>
            <p className='font-bold text-white text-[17px]  md:text-[30px] mt-[8px]'>info@drill24.com</p>
            <p className='text-white mt-[6px] leading-[20px]'> Mail 24/7 Anytime For Your Problem</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutPage4
