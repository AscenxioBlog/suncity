import React from 'react'
import man from '../../assets/man.png'
import radio from '../../assets/radio.png'
import Homefirst from '../../I-ObserverFolder/Homefirst'

function Index4() {
  return (
    <div className=' min-h-[120vh] w-full bg-[#F6F6F6] mt-[70px] grid grid-cols-1 lg:grid-cols-[55%,45%]'>
        <div className="  flex justify-center items-center"> 
            <div className=" h-[400px] md:h-[500px] w-[85%]  relative">
                <img src={man} className=' h-[100%] w-[100%]' alt="" />
                <div className=" h-[160px] w-[320px] bg-[url(assets/cloud.jpg)] bg-cover rounded-[10px] absolute bottom-0 right-0 lg:bottom-[-50px] lg:right-[-50px] flex pl-7 items-center">
                    <h1 className=' text-[1.8rem] font-bold text-white uppercase'>Our mission make solar energy accessible</h1>
                </div>
            </div>
        </div>
        <div className=" mt-[50px]  lg:pt-[100px]">
        <div className=" min-h-[500px] lg:min-h-[600px] bg-[] w-[90%] pl-8 md:pl-[60px] lg:pl-3">
            <h1 className="relative uppercase font-semibold text-deepgreen flex items-center">
                <span className="absolute before:content-['']  before:block before:h-[7px] before:w-[48px] before:bg-[url(assets/before.png)] before:bg-cover"></span>
                <span className=' ml-[60px]'>About Us</span>
            </h1>
            <Homefirst/>

            {/* <h1 className=' text-[1.4rem] lg:text-[2.6rem] font-bold  lg:flex lg:flex-col'><span>We believe solar</span>  <span>power</span> <span>should be accessibles</span></h1> */}

            <p className=' lg:flex lg:flex-col text-[gray] mt-6'>
                <span>we are passionate about transforming the way we power our world.</span>
                <span>As</span>
                <span>a leading provider of renewable energy solutions, we are committed</span>
                <span>to</span>
                <span>driving the transition to a cleaner, more sustainable future.</span>
            
            </p>
            <div className=" h-[200px] w-[320px] mt-4">
                <div className=" h-[35px] w-full  grid grid-cols-[10%,88%] gap-1">
                    <div className=" flex items-center">
                        <aside className=' h-[30px] w-[30px] rounded-[50%] flex justify-center items-center '>
                            <img src={radio} className=' h-[22px]' alt="" />
                        </aside>
                    </div>
                    <div className="  flex items-center font-semibold"> <p>Residential Solar Installation</p></div>
                </div>


                <div className=" h-[35px] w-full  grid grid-cols-[10%,88%] gap-1 mt-3">
                    <div className=" flex items-center">
                        <aside className=' h-[30px] w-[30px] rounded-[50%] flex justify-center items-center '>
                            <img src={radio} className=' h-[22px]' alt="" />
                        </aside>
                    </div>
                    <div className="  flex items-center font-semibold"> <p>Commercial Solar Solutions</p></div>
                </div>

                <div className=" h-[35px] w-full  grid grid-cols-[10%,88%] gap-1 mt-3">
                    <div className=" flex items-center">
                        <aside className=' h-[30px] w-[30px] rounded-[50%] flex justify-center items-center '>
                            <img src={radio} className=' h-[22px]' alt="" />
                        </aside>
                    </div>
                    <div className="  flex items-center font-semibold"> <p>Solar Panel Maintenance</p></div>
                </div>

                <button className=' flex h-[55px] w-[150px] rounded-[10px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center mt-4'>Learn More
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-1">Learn</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-1 items-center">More</div>
            </button>
            </div>

            
            </div>
        </div>
      
    </div>
  )
}

export default Index4
