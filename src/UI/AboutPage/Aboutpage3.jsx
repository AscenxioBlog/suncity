import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck,faMagnifyingGlass,faGears,faBoxOpen } from '@fortawesome/free-solid-svg-icons';

function Aboutpage3() {
  return (
    <div>
      
      <div className='h-[2050px] md:h-[1200px] lg:h-[700px] bg-[rgb(243,243,243)] overflow-hidden'>

        <div className='flex justify-center items-center flex-col mb-[50px]'>

        <p className='font-semibold text-deepgreen text-[12px] md:text-[15px]'><button className='text-white bg-deepgreen py-[9px] px-[9px] rounded-[3px] mr-[10px] block md:inline-block'>QUALITY HANDYMAN </button> <p className='ml-[37px] md:ml-0 md:inline-block'>SOLUTION</p></p>

        <p className='text-[27px] md:text-[50px] font-bold mt-[10px] md:mt-[30px]'>Easy Quick Following Steps</p>
        </div>

        <div className=' h-[1900px] md:h-[910px] lg:h-[460px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-[23px] px-[10px] md:px-[60px] relative '>

            <div className='relative flex flex-col items-center justify-center h-[400px] bg-white group clip '>

                <button className='bg-[rgb(243,243,243)] py-[25px] px-[25px] rounded-[50%] mb-[15px] absolute top-[25px] group-hover:bg-deepgreen transition duration-[0.6s] '>
                <FontAwesomeIcon icon={faClipboardCheck}  className='h-[40px] w-[45px] text-deepgreen group-hover:text-white  transition duration-[0.6s]'/>
                </button>

                <p className='text-[23px] font-semibold mb-[15px]'>Register For Work</p>

                <p className='w-[300px] md:w-[250px] lg:w-[200px] md:ml-[30px] lg:ml-[35px] text-[rgb(130,134,137)]'>Vulputate libero morbi suscipit curabitur cum aliqam nascetur laoreet nam,</p>

               
            </div>
            <button className='bg-deepgreen py-[13px] px-[20px] rounded-[50%] text-white text-[20px] font-semibold absolute bottom-[1490px]
            right-[168px] md:right-[579px] md:bottom-[490px] lg:bottom-[50px] lg:right-[1120px]'>01</button>

            <div className='relative flex flex-col items-center justify-center h-[400px] md:mt-[50px] bg-white group clip'>

            <button className='bg-[rgb(243,243,243)] py-[25px] px-[25px] rounded-[50%] mb-[15px] absolute top-[25px] group-hover:bg-deepgreen transition duration-[0.6s] '>
            <FontAwesomeIcon icon={faMagnifyingGlass}  className='h-[40px] w-[45px] text-deepgreen group-hover:text-white  transition duration-[0.6s]'/>
            </button>

            <p className='text-[23px] font-semibold mb-[15px]'>Inspect & Analyze</p>

            <p className='w-[300px] md:w-[250px] lg:w-[200px] md:ml-[30px] lg:ml-[35px] text-[rgb(130,134,137)]'>Vulputate libero morbi suscipit curabitur cum aliqam nascetur laoreet nam,</p>


            </div>
            <button className='bg-deepgreen py-[13px] px-[20px] rounded-[50%] text-white text-[20px] font-semibold absolute bottom-[1010px]
            right-[168px] md:right-[209px] md:bottom-[440px] lg:bottom-0 lg:right-[805px]'>02</button>

            <div className='relative flex flex-col items-center justify-center h-[400px] bg-white group clip '>

            <button className='bg-[rgb(243,243,243)] py-[25px] px-[25px] rounded-[50%] mb-[15px] absolute top-[25px] group-hover:bg-deepgreen transition duration-[0.6s] '>
            <FontAwesomeIcon icon={faGears}  className='h-[40px] w-[45px] text-deepgreen group-hover:text-white  transition duration-[0.6s]'/>
            </button>

            <p className='text-[23px] font-semibold mb-[15px]'>Work Processing</p>

            <p className='w-[300px] md:w-[250px] lg:w-[200px] md:ml-[30px] lg:ml-[35px] text-[rgb(130,134,137)]'>Vulputate libero morbi suscipit curabitur cum aliqam nascetur laoreet nam,</p>


            </div>
            <button className='bg-deepgreen py-[13px] px-[20px] rounded-[50%] text-white text-[20px] font-semibold absolute bottom-[540px]
            right-[168px] md:right-[579px] md:bottom-[40px] lg:right-[490px] lg:bottom-[50px]'>03</button>

            <div className='relative flex flex-col items-center justify-center h-[400px] md:mt-[50px] bg-white group clip'>

            <button className='bg-[rgb(243,243,243)] py-[25px] px-[25px] rounded-[50%] mb-[15px] absolute top-[25px] group-hover:bg-deepgreen transition duration-[0.6s] '>
            <FontAwesomeIcon icon={faBoxOpen} className='h-[40px] w-[45px] text-deepgreen group-hover:text-white  transition duration-[0.6s]'/>
            </button>

            <p className='text-[23px] font-semibold mb-[15px]'>Handover Clients</p>

            <p className='w-[300px] md:w-[250px] lg:w-[200px] md:ml-[30px] lg:ml-[35px] text-[rgb(130,134,137)]'>Vulputate libero morbi suscipit curabitur cum aliqam nascetur laoreet nam,</p>


            </div>
            <button className='bg-deepgreen py-[13px] px-[20px] rounded-[50%] text-white text-[20px] font-semibold absolute bottom-[60px]
            right-[168px] md:bottom-0 md:right-[209px] lg:bottom-[0px] lg:right-[172px]'>04</button>

        </div>

      </div>

    </div>
  )
}

export default Aboutpage3
