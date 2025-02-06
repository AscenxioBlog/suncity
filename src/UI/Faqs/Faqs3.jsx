import React from 'react'
import posthill from '../../assets/posthill.png'
import man from '../../assets/bb.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {Autoplay, FreeMode, Pagination } from 'swiper/modules';


function Faqs3() {
  return (
    <div className=' h-[100vh] w-full bg-[#E9E9E9]'>

        <div className=" h-[50px] md:h-[80px] w-full bg-red-200 flex justify-center items-center gap-2 ">
            <div className=" h-[30px] w-[180px] md:w-[210px] flex justify-center items-center bg-deepgreen rounded-[5px] uppercase text-[16px] md:text-[18px] font-semibold text-white">Quality Handyman</div>
            <p className=' uppercase text-[17px] font-semibold text-deepgreen  '>Solution</p>
        </div>

        <div className=" h-[50px] md:h-[60px] w-full bg-red-200 flex justify-center items-center text-[1.8rem]  md:text-[2.7rem] font-bold capitalize">
           <h1>What Customers Says</h1>
        </div>

                  
        <div className=" h-[400px] w-full bg-yellow-700 pl-4 pr-4 mt-4">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className=" h-[370px] w-[350px] bg-white flex flex-col items-center">
                <div className=" h-[80px] w-[90%]  flex items-center    ">
                    <img src={posthill} className=' w-[130px]' alt="" />
                </div>

                <div className=" h-[140px] w-[90%] flex items-center border-b-[1px] border-[gray]">
                    <p>“According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”</p>
                </div>

                <div className=" h-[110px] w-[90%] bg-[] flex gap-2 items-center ">
                    <div className=" h-[80px] w-[80px] bg-[red]  rounded-[50%] overflow-hidden ">
                        <img src={man} className=' h-[100%] w-[100%]' alt="" />
                    </div>
                    <div className=" h-[80px] w-[150px] bg-[] flex flex-col justify-center font-semibold">
                        <h1>Yusuf O. Hassan</h1>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className=" h-[370px] w-[350px] bg-white flex flex-col items-center">
                <div className=" h-[80px] w-[90%]  flex items-center    ">
                    <img src={posthill} className=' w-[130px]' alt="" />
                </div>

                <div className=" h-[140px] w-[90%] flex items-center border-b-[1px] border-[gray]">
                    <p>“According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”</p>
                </div>

                <div className=" h-[110px] w-[90%] bg-[] flex gap-2 items-center ">
                    <div className=" h-[80px] w-[80px] bg-[red]  rounded-[50%] overflow-hidden ">
                        <img src={man} className=' h-[100%] w-[100%]' alt="" />
                    </div>
                    <div className=" h-[80px] w-[150px] bg-[] flex flex-col justify-center font-semibold">
                        <h1>Yusuf O. Hassan</h1>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className=" h-[370px] w-[350px] bg-white flex flex-col items-center">
                <div className=" h-[80px] w-[90%]  flex items-center    ">
                    <img src={posthill} className=' w-[130px]' alt="" />
                </div>

                <div className=" h-[140px] w-[90%] flex items-center border-b-[1px] border-[gray]">
                    <p>“According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”</p>
                </div>

                <div className=" h-[110px] w-[90%] bg-[] flex gap-2 items-center ">
                    <div className=" h-[80px] w-[80px] bg-[red]  rounded-[50%] overflow-hidden ">
                        <img src={man} className=' h-[100%] w-[100%]' alt="" />
                    </div>
                    <div className=" h-[80px] w-[150px] bg-[] flex flex-col justify-center font-semibold">
                        <h1>Yusuf O. Hassan</h1>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" h-[370px] w-[350px] bg-white flex flex-col items-center">
                <div className=" h-[80px] w-[90%]  flex items-center    ">
                    <img src={posthill} className=' w-[130px]' alt="" />
                </div>

                <div className=" h-[140px] w-[90%] flex items-center border-b-[1px] border-[gray]">
                    <p>“According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”</p>
                </div>

                <div className=" h-[110px] w-[90%] bg-[] flex gap-2 items-center ">
                    <div className=" h-[80px] w-[80px] bg-[red]  rounded-[50%] overflow-hidden ">
                        <img src={man} className=' h-[100%] w-[100%]' alt="" />
                    </div>
                    <div className=" h-[80px] w-[150px] bg-[] flex flex-col justify-center font-semibold">
                        <h1>Yusuf O. Hassan</h1>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className=" h-[370px] w-[350px] bg-white flex flex-col items-center">
                <div className=" h-[80px] w-[90%]  flex items-center    ">
                    <img src={posthill} className=' w-[130px]' alt="" />
                </div>

                <div className=" h-[140px] w-[90%] flex items-center border-b-[1px] border-[gray]">
                    <p>“According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”</p>
                </div>

                <div className=" h-[110px] w-[90%] bg-[] flex gap-2 items-center ">
                    <div className=" h-[80px] w-[80px] bg-[red]  rounded-[50%] overflow-hidden ">
                        <img src={man} className=' h-[100%] w-[100%]' alt="" />
                    </div>
                    <div className=" h-[80px] w-[150px] bg-[] flex flex-col justify-center font-semibold">
                        <h1>Yusuf O. Hassan</h1>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
          
        </div>

      
    </div>
  )
}

export default Faqs3
