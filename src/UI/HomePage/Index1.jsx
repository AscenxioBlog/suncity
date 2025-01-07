import React from 'react'

function Index1() {
  return (
   <div className=" mt-4">
     <div className=" md:hidden">
     <div className=' h-[60vh] bg-gray-200 lg:h-[90vh] w-full flex items-center '>
        <div className=" min-h-[40vh] w-[400px] md:w-[700px] bg-[] pl-3 pr-3">
            <p className=' font-semibold text-deepgreen md:text-[23px]'>Solar Energy for a Brighter Tomorrow</p>
           <section className=" min-h-[100px] w-full mt-2">
           <div className=' text-[1.3rem] md:text-[3.2rem] font-bold mb-3 '>ENERGY DISCOVER <span className=' font-semibold'>Our</span> </div>
           <span className=' text-[1.5rem] font-semibold italic'>Solar Shop</span>
           </section>

            <p className=' justify-evenly text-[gray]'>Welcome to our Solar Shop, your one-stop destination for all your solar energy needs.</p> 
            <button className=' flex h-[55px] w-[150px] rounded-[10px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center mt-4'>Shop Now
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-1">Shop</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-1 items-center">Now</div>
            </button>
        </div>
    </div>
     </div>

    <div className=" hidden md:inline-block w-full ">
    <div className=' h-[60vh] lg:h-[90vh] w-full banner flex items-center'>
        <div className=" h-[40vh] lg:h-[400px] w-[400px] md:w-[700px] bg-[] pl-3 pr-3">
            <p className=' font-semibold text-deepgreen md:text-[23px]'>Solar Energy for a Brighter Tomorrow</p>
           <section className=" min-h-[100px] w-full mt-2">
           <div className=' text-[1.3rem] md:text-[3.2rem] font-bold mb-3 '>ENERGY DISCOVER <span className=' font-semibold'>Our</span> </div>
           <span className=' text-[3.5rem] font-semibold italic'>Solar Shop</span>
           </section>

            <p className=' justify-evenly text-[gray]'>Welcome to our Solar Shop, your one-stop destination for all your solar energy needs.</p> 
            <button className=' flex h-[55px] w-[150px] rounded-[10px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center mt-4'>Shop Now
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-1">Shop</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-1 items-center">Now</div>
            </button>    
        </div>
    </div>
    </div>
   </div>
  )
}

export default Index1