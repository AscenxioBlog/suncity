import React, { useContext } from 'react'
// import { FiPhoneCall } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import { FaShopify } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoIosContacts } from "react-icons/io";
import { AppContext } from './ContextApp';
import { Link } from 'react-router-dom';

function MiniHeader() {
    const {viewMiniHeader}=useContext(AppContext)
  return (
    <div className='' style={{display:viewMiniHeader}}>
            <div className=" h-[370px]  w-[50px]  fixed right-0 top-[150px] z-50 hidden lg:inline-block">
          <div className=" h-[370px] w-full transition-all">
            <div className=" h-[120px] w-full  relative">
              <div className=" h-[50px] w-[120px] bg-lightgreen hover:bg-deepgreen rotate-[90deg] translate-x-[-35px] translate-y-[35px] flex justify-center items-center font-bold gap-2">
              {/* <BiMessageRoundedAdd /> */}
              <span>SUNCITY</span>
              </div>
            </div>
            <Link to='/'>
            <div className=" h-[60px] w-[250px] bg-lightgreen absolute top-[123px] hover:ml-[-180px] duration-200 transition-[1s] flex gap-2">
              <div className=" w-[50px] h-[60px] bg-deepgreen flex justify-center items-center text-[35px]"><FcHome /></div>
              <div className=" h-[60px] flex justify-center items-center font-semibold ">HOME</div>

            </div>
            </Link>


            <div className=" h-[60px] w-[250px] bg-lightgreen absolute top-[186px] hover:ml-[-184px] duration-200 transition-[1s] flex gap-2">
              <div className=" w-[50px] h-[60px] bg-deepgreen flex justify-center items-center text-[35px]"><FaShopify /></div>
              <div className=" h-[60px] flex justify-center items-center font-semibold ">SHOP</div>

            </div>


            <div className=" h-[60px] w-[250px] bg-lightgreen absolute top-[248px] hover:ml-[-184px] duration-200 transition-[1s] flex gap-2">
              <div className=" w-[50px] h-[60px] bg-deepgreen flex justify-center items-center text-[35px]"><FcAbout /></div>
              <div className=" h-[60px] flex justify-center items-center font-semibold ">ABOUT</div>

            </div>


            <div className=" h-[60px] w-[250px] bg-lightgreen absolute top-[310px] hover:ml-[-184px] duration-200 transition-[1s] flex gap-2">
              <div className=" w-[50px] h-[60px] bg-deepgreen flex justify-center items-center text-[35px]"><IoIosContacts /></div>
              <div className=" h-[60px] flex justify-center items-center font-semibold ">CONTACT</div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default MiniHeader
