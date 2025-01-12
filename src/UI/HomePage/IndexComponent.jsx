import React from 'react'
import Index1 from './Index1'
import Index2 from './Index2'
import Index3 from './Index3'
import Index4 from './Index4'
import Indexpage5 from './Indexpage5'
import './home.css'
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { BiMessageRoundedAdd } from "react-icons/bi";

function IndexComponent() {
  return (
    <div>
        <Index1/>
        <Index2/>
        <Index3/>
        <Index4/>
        <Indexpage5/>
        <div className=" h-[350px] w-[50px]  fixed right-0 top-[150px] z-50">
          <div className=" h-[350px] w-full transition-all">
            <div className=" h-[120px] w-full bg-red-500 relative">
              <div className=" h-[50px] w-[120px] bg-lightgreen hover:bg-deepgreen rotate-[90deg] translate-x-[-35px] translate-y-[35px] flex justify-center items-center font-bold gap-2">
              <BiMessageRoundedAdd />
              <span>CONTACT</span>
              </div>
            </div>
            <div className=" h-[60px] w-[250px] bg-lightgreen absolute top-[123px] hover:ml-[-180px] duration-200 transition-[1s] flex gap-2">
              <div className=" w-[50px] h-[60px] bg-deepgreen flex justify-center items-center text-[35px]"><FiPhoneCall /></div>
              <div className=" h-[60px] flex justify-center items-center font-semibold ">+2348057320503</div>

            </div>


            <div className=" h-[60px] w-[250px] bg-lightgreen absolute top-[186px] hover:ml-[-184px] duration-200 transition-[1s] flex gap-2">
              <div className=" w-[50px] h-[60px] bg-deepgreen flex justify-center items-center text-[35px]"><TfiEmail /></div>
              <div className=" h-[60px] flex justify-center items-center font-semibold ">Myona1648@gmail.com</div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default IndexComponent