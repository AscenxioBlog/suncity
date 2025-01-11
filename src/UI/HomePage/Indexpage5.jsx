import React from 'react'
import Homeslider from './Homeslider'

function Indexpage5() {
  return (
    <div>
      <div className=" min-h-[400px] w-full bg-[] grid grid-cols-1 lg:grid-cols-[35%,65%]">
        <div className="min-h-[400px] bg-[] flex justify-center items-center">
          <div className=" min-h-[300px] w-[80%] bg-[] space-y-3">
            <div className=" text-[2.5rem] font-bold">
              <h1>Our Power Energy</h1>
              <h1>Product Category</h1>
            </div>
            <p className=' text-[gray]'>we offer a comprehensive range of the
            products to meet all your solar energy.</p>

            <button className=' flex h-[55px] w-[150px] rounded-[10px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center mt-4'>View All
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-1">View</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-1 items-center">All</div>
            </button>
          </div>
        </div>
        <div className="h-[400px] bg-[] flex justify-center items-center">
          <Homeslider/>
        </div>
      </div>
    </div>
  )
}

export default Indexpage5
