import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function AboutPage2() {
  return (
    <div>
      
      <div className='grid grid-cols-1 bg-white lg:grid-cols-2 h-[1460px] md:h-[1750px]  lg:h-[675px] gap-[20px] lg:gap-0'>

        <div className='bg-white px-[10px] md:pl-[30px] lg:pl-[65px] h-[427px] md:h-[675px]'>
            <img src="https://html.themewant.com/solari/assets/images/about/20.png" className=''/>
        </div>

        <div className='bg-white h-[1000px] md:h-[970px] lg:h-[675px] grid grid-cols-1 '>
            
            <div className='bg-white px-[10px] md:px-[30px] lg:px-0 h-fit pb-[30px]'>
                
            <p className='font-semibold tracking-wider text-deepgreen'><button className='text-white bg-deepgreen py-[2px] px-[9px] rounded-[2px] mr-[10px]'>ABOUT </button>COMPANY</p>
            
            <p className='text-black text-[25px] md:text-[35px] lg:text-[45px] leading-[30px] md:leading-[40px] lg:leading-[50px] mt-[6px] md:mt-[20px] font-bold lg:w-[550px]'>Produce Your Own Clean Save The
            Environment</p>

            <button className='py-[13px] px-[40px] text-white bg-deepgreen rounded-[5px] mt-[40px] block md:inline-block'>Why Choose Us?</button>
            <button className='py-[13px] px-[40px] text-black bg-white rounded-[5px] mt-[40px]'>Our Mission</button>
            <button className='py-[13px] px-[40px] text-black bg-white rounded-[5px] mt-[40px]'>Our Goal</button>
            
            <p className='w-[300px] md:w-[650px] lg:w-[600px] mt-[30px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam reiciendis laborum dolorum ipsam nostrum! Fuga corrupti fugit provident blanditiis expedita, id deleniti quisquam consequuntur harum nesciunt, officiis sed dolor pariatur?</p>
            
            </div>
            
            
            <div className='h-[334px] md:h-[325px] lg:h-fit bg-green-600 grid grid-cols-1 lg:grid-cols-2'>
              
              <div className='  bg-white px-[20px] lg:px-[0px] h-fit'>
                <img src="https://html.themewant.com/solari/assets/images/about/21.jpg" className='h-[200px] md:h-[350px] lg:h-[160px]' />
              </div>
              
              <div className='bg-white h-fit'>
                <ol className='leading-[40px]'>
                  <li>
                    <img src="https://html.themewant.com/solari/assets/images/about/dt.png" className='inline-block'/>
                    <p className='inline-block ml-[10px]'>Experienced Team of Experts</p>
                  </li>
                  <li>
                    <img src="https://html.themewant.com/solari/assets/images/about/dt.png" className='inline-block'/>
                    <p className='inline-block ml-[10px]'>Experienced Team of Experts</p>
                  </li>
                  <li>
                    <img src="https://html.themewant.com/solari/assets/images/about/dt.png" className='inline-block'/>
                    <p className='inline-block ml-[10px]'>Experienced Team of Experts</p>
                  </li>
                  <li>
                    <img src="https://html.themewant.com/solari/assets/images/about/dt.png" className='inline-block'/>
                    <p className='inline-block ml-[10px]'>Experienced Team of Experts</p>
                  </li>
                 
                </ol>
              </div>
            </div>
            
            <div className='grid grid-cols-2 bg-red-500 h-[100px] mt-[70px] md:mt-[250px] lg:mt-[45px]'>
              
              <div className='bg-white'>
              <button className=' flex h-[55px] w-[180px] ml-[15px] md:ml-[70px] rounded-[25px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center mt-4'>Read More
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-[15px]">Read</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-[-19px] items-center">More</div>
            </button>
              </div>
              
              <div className='bg-slate-600'>
              <FontAwesomeIcon icon={faCirclePlay} />
              
              </div>
            </div>
            
        </div>

      </div>

    </div>
  )
}

export default AboutPage2
