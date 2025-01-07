import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";



function Index3() {

    const Solarproduct = [
        {
            id: '1',
            name: 'Solar Power Boards',
            image: 'https://html.themewant.com/solari/assets/images/shop/05.jpg',
            newprice: '199.00',
            oldprice: '299.00'
        },


        {
            id: '2',
            name: 'Solar Power Boards',
            image: 'https://html.themewant.com/solari/assets/images/shop/06.jpg',
            newprice: '124.00',
            oldprice: '199.00'
        },

        {
            id: '3',
            name: 'Enphase Micro Inverter',
            image: 'https://html.themewant.com/solari/assets/images/shop/07.jpg',
            newprice: '169.00',
            oldprice: '285.00'
        },


        {
            id: '4',
            name: 'Blavo Solar Charger',
            image: 'https://html.themewant.com/solari/assets/images/shop/08.jpg',
            newprice: '153.00',
            oldprice: '249.00'
        },

        {
            id: '5',
            name: 'Solar Power House',
            image: 'https://html.themewant.com/solari/assets/images/shop/08.jpg',
            newprice: '199.00',
            oldprice: '299.00'
        },


        {
            id: '6',
            name: 'Blue Planet Inverter',
            image: 'https://html.themewant.com/solari/assets/images/shop/10.jpg',
            newprice: '199.00',
            oldprice: '299.00'
        },

        {
            id: '7',
            name: 'Solar Light Boards',
            image: 'https://html.themewant.com/solari/assets/images/shop/11.jpg',
            newprice: '199.00',
            oldprice: '299.00'
        },


        {
            id: '8',
            name: 'Eco Plannet Power',
            image: 'https://html.themewant.com/solari/assets/images/shop/12.jpg',
            newprice: '199.00',
            oldprice: '299.00'
        },
    ]
  return (
    <div>
        <div className=" min-h-[100vh] w-full bg-[] mt-6 dark:">
            <div className=" h-[150px] w-full bg-[] text-center space-y-5">
                <h1 className=' text-[2.5rem] font-semibold '>Our Recent  
                 <span className="relative inline-block ml-1 ">
                Product
                <svg width="157" height="18" viewBox="0 0 157 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0  bottom-[-10px] ">
                <path
                    d="M1 16.569C35.3333 3.73568 107.7 -4.03506 156.5 7.96494"
                    stroke="#4AAB3D"
                    strokeWidth="3"
                    className="path-animation"
                    />
                </svg>
                </span>
                </h1>

                
                 {/* for small screen   */}
               <div className=" md:hidden text-[gray] space-y-1">
               <p>Welcome to our Solar Shop, your one-stop</p>
               <p> destination for all your solar energy needs.</p>
               </div>

                {/* for medium screen */}
               <div className=" hidden md:inline-block lg:hidden text-[gray] space-y-2">
               <p>Welcome to our Solar Shop, your one-stop destination for all your solar energy needs.</p>
               </div>


                {/* for large screen */}
               <div className="hidden lg:inline-block text-[gray] space-y-1">
               <p>Welcome to our Solar Shop, your one-stop destination</p>
               <p>  for all your solar energy needs.</p>
               </div>

            </div>



        <div className=" min-h-[350px] w-full flex justify-center">
        <div className=" min-h-[350px] w-[90%] bg-[] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
               {
                Solarproduct.map((product)=>(
                    <div className="productdiv transition-all h-[380px] bg-[] flex flex-col items-center">
                    <div className=" h-[260px] w-[90%]  bg-[#F6F6F6]  relative flex justify-center items-center">
                        <div className="productpics transition-all duration-400 h-[200px] w-[70%] bg-[] ">
                            <img src={product.image} className=' h-[100%] w-[100%]' alt="" />
                        </div>
                        <div className=" subdiv transition-all duration-400 h-[260px] w-full absolute top-0  flex justify-center items-center gap-7 text-[23px] ">
                            <div className=' h-[35px] w-[35px] bg-white text-deepgreen hover:bg-deepgreen hover:text-white rounded-[50%] flex justify-center items-center transition-all'><MdOutlineFavoriteBorder /></div>
                            <div className=' h-[35px] w-[35px] bg-white text-deepgreen hover:bg-deepgreen hover:text-white rounded-[50%] flex justify-center items-center transition-all'><IoEyeOutline /></div>
                            <div className=' h-[35px] w-[35px] bg-white text-deepgreen hover:bg-deepgreen hover:text-white rounded-[50%] flex justify-center items-center transition-all'><FaArrowRightArrowLeft /></div>
                        </div>
                    </div>
                    <div className=" h-[120px] w-[90%] ">
                        <div className=" h-[60px] w-full  text-[1.2rem] font-semibold flex justify-center items-center">
                            <h1>{product.name}</h1>
                        </div>

                        <div className=" h-[60px] w-full bg-[] overflow-hidden font-semibold" >
                            <div className="transition-all duration-400 price1 h-[60px] w-full flex justify-center gap-10 ">
                                <span className=' flex items-center'><TbCurrencyNaira /> {product.newprice}</span>
                                <span className=' flex items-center text-[gray]'><del className=' flex items-center'><TbCurrencyNaira /> {product.oldprice}</del></span>
                            </div>
                            <button className=" price2 h-[60px] w-full flex justify-center items-center gap-3"> <HiOutlineShoppingCart className=' text-red-500' /> Buy Now</button>
                        </div>
                    </div>
                </div>
                ))
               }



                
            </div>
        </div>

        </div>
    </div>
  )
}

export default Index3