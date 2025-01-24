import React from 'react'
import { BiSolidMessageAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Checkout2() {
  return (
    <div className=' min-h-[100vh] w-full '>

        <div className=" h-[150px] w-full flex flex-col items-center">
            <div className=" h-[100px] w-[90%] text-[50px] font-bold pl-[] ">
                <h1> Checkout</h1>
            </div>
            <div className=" h-[50px] w-[90%] flex items-center bg-[#F6F6F6] " style={{borderTop:'3px solid #4AAB3D'}}>
                <p className=' flex '><span className=' flex items-center text-slate-400'><BiSolidMessageAlt /> Have a coupon?</span> <span className=' text-deepgreen pl-3'><Link>Click here to enter you code</Link></span></p>
            </div>
        </div>


        <div className=" w-full flex justify-center ">
        <div className=" min-h-[500px] w-[90%] bg-purple-400 grid grid-cols-1 md:grid-cols-[69%,30%] gap-1">
            <div className=" bg-[#F6F6F6]">
                <div className=" h-[80px] w-full text-[25px] font-bold">
                    <h1>Billing details</h1>
                </div>

                <form action="" className=' space-y-4'>
                    <div className=" min-h-[80px] w-full  grid grid-cols-1 md:grid-cols-2">
                        <div className="  flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>First Name*</label>
                            <input type="text" className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                        <div className="  flex flex-col justify-between">
                        <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Last Name*</label>
                        <input type="text" className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                    </div>



                    <div className=" min-h-[80px] w-full  grid grid-cols-1 md:grid-cols-2">
                        <div className="  flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Phone Number*</label>
                            <input type="text" className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                        <div className="  flex flex-col justify-between">
                        <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Email Address*</label>
                        <input type="text" className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                    </div>


                    <div className=" h-[80px] w-full  ">
                        <div className=" h-[80px]  w-full flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Company's Name(optional)</label>
                            <input type="text" className=' h-[45px] w-[98%] outline-deepgreen border-deepgreen border-[1px]' />
                        </div>
                       
                    </div>


                    <div className=" h-[80px] w-full  ">
                        <div className=" h-[80px]  w-full flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Street Address*</label>
                            <input type="text" className=' h-[45px] w-[98%] outline-deepgreen border-deepgreen border-[1px]' />
                        </div>
                       
                    </div>


                    <div className=" min-h-[80px] w-full  grid grid-cols-1 md:grid-cols-2">
                        <div className="  flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Nearest Bustop*</label>
                            <input type="text" className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                        <div className="  flex flex-col justify-between">
                        <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Town/City*</label>
                        <input type="text" className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                    </div>


                    <div className=" h-[80px] w-full  ">
                        <div className=" h-[80px]  w-full flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>State*</label>
                            <input type="text" className=' h-[45px] w-[98%] outline-deepgreen border-deepgreen border-[1px]' />
                        </div>
                       
                    </div>


                </form>
            </div>
            <div className=" bg-slate-600"></div>
        </div>
        </div>
      
    </div>
  )
}

export default Checkout2
