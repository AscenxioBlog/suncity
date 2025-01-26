import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

function AboutPage5() {
  return (
    <div>
      
        <div className='flex justify-center items-center flex-col mb-[70px]'>

            <p className='font-semibold text-deepgreen text-[12px] md:text-[15px] tracking-wider'><button className='text-white bg-deepgreen py-[9px] px-[9px] rounded-[3px] ml-[20px] block md:inline-block'>OUR</button> <p className='ml-[px] md:ml-0 md:inline-block'>EXPERT TEAM</p></p>

            <p className='text-[27px] md:text-[50px] font-bold mt-[10px] md:mt-[30px]'>Expert Team Members</p>
       </div>

       <div className='grid grid-cols-1 lg:grid-cols-4 lg:px-[115px] lg:gap-[25px] gap-[70px] mb-[70px]'>

        <div className=' h-[440px] md:h-[770px] lg:h-[350px] px-[10px] md:px-[65px] lg:px-0 relative'>
            <img src="https://html.themewant.com/solari/assets/images/team/17.png" className='w-[390px] md:w-[750px] md:h-[670px] lg:w-[500px] lg:h-[250px]'/>

            <button className='bg-deepgreen px-[18px] py-[11px] rounded-[50%] text-white text-[21px] absolute top-[300px] md:top-[610px] left-[35px] md:left-[80px] lg:top-[200px] lg:left-[20px]'><FontAwesomeIcon icon={faShareNodes} /></button>

            <p className='text-[19px] ml-[20px] font-bold mt-[30px] lg:text-[23px]'>Mark Makana</p>
            <p className='text-[rgb(130,134,137)] ml-[20px] mt-[8px]'>Solar Specialist</p>
        </div>

        <div className=' h-[440px] md:h-[770px] lg:h-[350px] px-[10px] md:px-[65px] lg:px-0 relative'>
            <img src="https://html.themewant.com/solari/assets/images/team/18.png" className='w-[390px] md:w-[750px] md:h-[670px] lg:w-[500px] lg:h-[250px]'/>

            <button className='bg-deepgreen px-[18px] py-[11px] rounded-[50%] text-white text-[21px] absolute top-[300px] md:top-[610px] left-[35px] md:left-[80px] lg:top-[200px] lg:left-[20px]'><FontAwesomeIcon icon={faShareNodes} /></button>

            <p className='text-[19px] ml-[20px] font-bold mt-[30px] lg:text-[23px]'>John Makana</p>
            <p className='text-[rgb(130,134,137)] ml-[20px] mt-[8px]'>Solar Specialist</p>
        </div>

        <div className=' h-[440px] md:h-[770px] lg:h-[350px] px-[10px] md:px-[65px] lg:px-0 relative'>
            <img src="https://html.themewant.com/solari/assets/images/team/19.png" className='w-[390px] md:w-[750px] md:h-[670px] lg:w-[500px] lg:h-[250px]'/>

            <button className='bg-deepgreen px-[18px] py-[11px] rounded-[50%] text-white text-[21px] absolute top-[300px] md:top-[610px] left-[35px] md:left-[80px] lg:top-[200px] lg:left-[20px]'><FontAwesomeIcon icon={faShareNodes} /></button>

            <p className='text-[19px] ml-[20px] font-bold mt-[30px] lg:text-[23px]'>Arvvani Joe</p>
            <p className='text-[rgb(130,134,137)] ml-[20px] mt-[8px]'>Solar Specialist</p>
        </div>

        <div className=' h-[440px] md:h-[770px] lg:h-[350px] px-[10px] md:px-[65px] lg:px-0 relative'>
            <img src="https://html.themewant.com/solari/assets/images/team/20.png" className='w-[390px] md:w-[750px] md:h-[670px] lg:w-[500px] lg:h-[250px]'/>

            <button className='bg-deepgreen px-[18px] py-[11px] rounded-[50%] text-white text-[21px] absolute top-[300px] md:top-[610px] left-[35px] md:left-[80px] lg:top-[200px] lg:left-[20px]'><FontAwesomeIcon icon={faShareNodes} /></button>

            <p className='text-[19px] ml-[20px] font-bold mt-[30px] lg:text-[23px]'>Matchine Mue</p>
            <p className='text-[rgb(130,134,137)] ml-[20px] mt-[8px]'>Solar Specialist</p>
        </div>

       </div>

    </div>
  )
}

export default AboutPage5
