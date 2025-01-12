import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";




function Contact3() {


  
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 }, // Latitude and Longitude
      zoom: 10,
    });
  }
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
  return (
    <div>
      
      <div className='bg-white h-[1290px] md:h-[1600px] lg:h-[780px] grid grid-cols-1 lg:grid-cols-[58%,42%] md:gap-[23px] px-[10px] md:px-[30px] lg:px-[110px] lg:pr-[128px] mb-[80px]'>

        <div className='bg-[rgb(204,203,203)] h-[610px] md:h-[780px] rounded-[5px]'>
          
          <p className='tracking-wider text-deepgreen ml-[15px] md:ml-[80px] mt-[15px] md:mt-[80px] font-semibold'><button className='text-white bg-deepgreen py-[2px] px-[9px] rounded-[2px]'>FEEL FREE </button> TO CONTACT US</p>

          <p className='text-black text-[25px] md:text-[35px] lg:text-[45px] ml-[15px] md:ml-[80px] mt-[6px] md:mt-[20px] font-semibold'>Let's Get in Touch</p>
          
          <input type="text" placeholder='Your Name' className='bg-white py-[14px] pl-[15px] ml-[15px] md:ml-[80px] mt-[30px] rounded-[25px] w-[160px] md:w-[240px] border-deepgreen'/>
          <input type="text" placeholder='Email Address' className='bg-white py-[14px] pl-[15px] ml-[15px] mt-[30px] rounded-[25px] w-[160px] md:w-[240px] border-deepgreen'/>
          
          <input type="text" placeholder='Select Subject' className='bg-white py-[14px] pl-[15px] ml-[15px] md:ml-[80px] mt-[30px] rounded-[25px] w-[337px] md:w-[497px] border-deepgreen'/>

          <input type="text" placeholder='Select Subject' id='dynamic-input' className='bg-white py-[14px] pl-[15px] ml-[15px] md:ml-[80px] mt-[30px] rounded-[25px] w-[337px] md:w-[497px] border-deepgreen'/>

          <textarea name="message" placeholder='Type Your Message' className='bg-white py-[14px] pl-[15px] pb-[90px] ml-[15px] md:ml-[80px] mt-[30px] rounded-[25px] w-[337px] md:w-[497px] border-deepgreen'></textarea>

          <button className=' flex h-[55px] w-[337px] md:w-[497px] ml-[15px] md:ml-[80px] rounded-[25px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center mt-4'>Send Message
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-[15px]">Send</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-[-19px] items-center">Message</div>
            </button>
         
        </div>

        <div className='bg-blue-400 h-[610px] md:h-[780px] rounded-[5px]' id='map'></div>
      </div>

    </div>
  )
}

export default Contact3
