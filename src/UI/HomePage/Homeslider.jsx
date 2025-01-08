import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/ Autoplay';

// import './styles.css';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";




function Homeslider() {
  return (
    <div className=' h-[250px] w-[90%] bg-[]'>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView:3,
              spaceBetween: 50,
            },
          }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" h-[100%] w-full flex items-end bg-[url(assets/wind.jpg)] rounded-[10px] bg-cover">
            <div className=" h-[100px] w-full   flex flex-col justify-center text-white">
              <h1 className=' text-[1.3rem] font-extrabold'>Solar Panel</h1>
              <Link><span className=' flex items-center justify-center hover:text-deepgreen'>Shop Now <FaArrowRightLong className=' mt-2 ml-1' /></span></Link>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className=" h-[100%] w-full flex items-end bg-[url(assets/module.jpg)] rounded-[10px] bg-cover">
            <div className=" h-[100px] w-full   flex flex-col justify-center text-white">
              <h1 className=' text-[1.3rem] font-extrabold'>Solar Modules</h1>
              <Link><span className=' flex items-center justify-center hover:text-deepgreen'>Shop Now <FaArrowRightLong className=' mt-2 ml-1' /></span></Link>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className=" h-[100%] w-full flex items-end bg-[url(assets/wind.jpg)] rounded-[10px] bg-cover">
            <div className=" h-[100px] w-full   flex flex-col justify-center text-white">
              <h1 className=' text-[1.3rem] font-extrabold'>Solar Inverter</h1>
              <Link><span className=' flex items-center justify-center hover:text-deepgreen'>Shop Now <FaArrowRightLong className=' mt-2 ml-1' /></span></Link>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className=" h-[100%] w-full flex items-end bg-[url(assets/inverter.jpg)] rounded-[10px] bg-cover">
            <div className=" h-[100px] w-full   flex flex-col justify-center text-white">
              <h1 className=' text-[1.3rem] font-extrabold'>Wind Energy</h1>
              <Link><span className=' flex items-center justify-center hover:text-deepgreen'>Shop Now <FaArrowRightLong className=' mt-2 ml-1' /></span></Link>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      
    </div>
  )
}

export default Homeslider
