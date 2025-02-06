import React, { useReducer } from 'react';
import bb from '../../assets/bb.jpg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

// Reducer function to manage accordion state
const accordionReducer = (state, action) => {
  return state === action.id ? null : action.id; // Toggle accordion
};

function Faqs2() {
  const [activeAccordion, dispatch] = useReducer(accordionReducer, null);

  const faqs = [
    { id: 1, title: "Drain Cleaning & Repairs" },
    { id: 2, title: "Water Heater Services" },
    { id: 3, title: "Pipe Leak Detection" },
    { id: 4, title: "Sewer Line Inspection" },
    { id: 5, title: "Bathroom & Kitchen Plumbing" },
  ];

  return (
    <div className="min-h-screen w-full p-4 md:p-8 flex flex-col lg:flex-row gap-5">
      {/* FAQ Section */}
      <div className="w-full lg:w-[65%] bg-white shadow-lg p-5 rounded-xl">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4">
            {/* Accordion Header */}
            <div 
              onClick={() => dispatch({ id: faq.id })} 
              className="h-[100px] bg-gray-100 rounded-lg flex items-center justify-between px-5 cursor-pointer transition-all duration-300"
            >
              <h1 className="text-lg font-semibold">{faq.title}</h1>
              <div className="h-8 w-8 flex justify-center items-center rounded-full bg-deepgreen text-white text-xl">
                {activeAccordion === faq.id ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </div>

            {/* Accordion Content */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeAccordion === faq.id ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="p-4 bg-gray-50 rounded-b-lg grid grid-cols-1 md:grid-cols-[30%,68%] gap-3">
                {/* Image Section */}
                <div className="flex justify-center">
                  <img src={bb} className="h-[150px] w-[250px] md:h-[180px] md:w-[200px] rounded-lg shadow-md" alt="Service" />
                </div>
                {/* Text Section */}
                <div className="text-gray-700">
                  <h2 className="text-lg font-bold">Lorem ipsum dolor sit amet.</h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas amet enim...
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image/Info Section */}
      <div className=" w-full lg:w-[33%] bg-white shadow-lg p-5 rounded-xl ">
        <div className=" h-[120px] w-full bg-gray-100 flex justify-center items-center  rounded-lg">
          <div className=" h-[55px] w-[80%] bg-white rounded-[50px] flex items-center gap-2 pl-4"> 
            <input type="text" name="" id="" className=' h-[40px] w-[80%] outline-none' placeholder='Enter Keyworld'/>
            <button className=" h-[55px] w-[55px] bg-deepgreen rounded-[60px] flex justify-center items-center text-white text-[20px]"><CiSearch /></button>
          </div>
        </div>



      <div className=" h-[500px] w-full  mt-6">
        <div className=" h-[280px] w-full  p-5 rounded-lg">
          <img src="https://html.themewant.com/solari/assets/images/cta/03.jpg" className=' w-full' alt="" />
        </div>

        <div className=" w-full flex flex-col items-center mt-4">
          <h1 className=' text-[25px] font-bold'>+234 8057320503</h1>
          <p className=' text-[17px] text-[gray] font-semibold'>Mon-Fri: 7:00 am-9:00 pm</p>
          <p className=' text-[17px] text-[gray] font-semibold'>24/7 Service Available</p>


          <button className=' flex h-[55px] w-[150px] rounded-[60px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center mt-4'>Call Us Now
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-1">Call Us</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-1 items-center">Now</div>
            </button>   
        </div>
      </div>

      </div>



    </div>
  );
}

export default Faqs2;
