import React from 'react'


function AboutPage6() {
  return (
    <div>
      
        <div className=' h-[820px] md:h-[1100px] lg:h-[600px] grid grid-cols-1 lg:grid-cols-2 px-[10px] md:px-[65px] lg:px-[112px] mb-[70px] relative'>

            <div className='h-[355px] md:h-[570px] lg:h-[525px] rounded-[9px] md:rounded-[12px] mb-[35px] md:mb-[50px]' style={{backgroundImage: `url('https://html.themewant.com/solari/assets/images/solution/01.jpg')`,
                backgroundSize: "contain", backgroundRepeat: "no-repeat",
            }}>
                <img src="https://html.themewant.com/solari/assets/images/solution/02.jpg" className='h-[170px] absolute right-[10%] lg:right-[46%] top-[18%]  md:top-[28%] lg:top-[40%] rounded-[8px]' />
            </div>

            <div className=' h-[430px] lg:h-[540px] lg:pl-[90px] grid grid-rows-1'>
                <div className=' mb-[70px]'>

                    <p className='font-semibold text-deepgreen text-[15px] md:text-[15px] tracking-wider'><button className='text-white bg-deepgreen py-[5px] lg:py-[2px] lg:px-[4px] px-[5px] rounded-[3px] inline-block '>QUALITY HANDYMAN</button> <p className='inline-block md:ml-0 md:inline-block'>SOLUTION</p></p>

                    <p className='text-[24px] md:text-[36px] lg:text-[50px] lg:leading-[60px] font-bold mt-[5px] md:mt-[20px] tracking-tight'>Amazing Feedback Say About Services</p>
                </div>

                <div className='bg-white shadow-lg h-[280px] lg:h-[310px] px-[20px] md:px-[40px] py-[20px] md:py-[40px] rounded-[10px] lg:rounded-[4px]'>
                    <div className='grid grid-cols-[24%,76%] md:grid-cols-[13%,87%] lg:grid-cols-[20%,80%] mb-[35px]'>
                        
                        <div><img src="https://html.themewant.com/solari/assets/images/about/07.png" /></div>
                        
                        <div>
                            <p className='font-bold text-[23px]'>Alex Dorimon</p>
                            <p className='text-[rgb(95,95,95)] text-[13px]'>Manager, IIT Docs</p>
                        </div>
                    </div>
                    
                    <div className='bg-[rgb(255,249,249)] h-[2px] mb-[30px]'></div>
                    
                    <p className='font-semibold text-[18px]'>“Cleaning company a busiess provides cleaning services to individuals, businesses or organizations. Cleaning ofal services can include tasks”</p>
                </div>

                

            </div>
            

        </div>

    </div>
  )
}

export default AboutPage6 
