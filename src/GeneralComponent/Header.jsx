import React, { useContext } from 'react'
import { FiClock } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Cart from '../UI/CartFolder/Cart';
import { AppContext } from './ContextApp';

function Header() {
    const {toggleCart,totalItems} = useContext(AppContext)
  return (
    <div className='w-full '>
        <section className='hidden w-full lg:inline-block'>
            <div className="  h-[50px] w-full bg-deepgreen flex justify-between text-white font-normal pl-7 pr-7">
            <section className="flex items-center space-x-8 ">
                <span className='flex items-center '><FiClock  className='mr-2 '/> Mon-Fri 8:00-18:00 / Sunday 8:00-14:00</span>  

                <span className='flex items-center '><MdMailOutline  className='mr-2 ' />suncityMart@gmail.com</span>
            </section>

            <section className='flex items-center '>
                <span>visit us:</span>
                <span className='flex items-center ml-2 space-x-3 '>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                
                </span>
            </section>
            </div>
        </section>

        <section className=" h-[60px] lg:h-[80px] w-full bg-white grid grid-cols-2 lg:grid-cols-[25%,50%,25%]">
            <div className=" bg-[] flex justify-center items-center ">
                <Link><div className=" font-bold text-[1.2rem] lg:text-[2.2rem]">SUNCITY</div></Link>
            </div>
            <div className="h-[60px] lg:h-[80px] bg-[] hidden lg:inline-block  "> 
               <div className=" h-[60px] lg:h-[80px] flex items-center gap-[70px] w-full justify-center font-semibold    ">
               <Link to='/'>HOME</Link>
                <Link to='/shop' >SHOP</Link>
                <Link>ABOUT US</Link>
                <Link to='/contact'>CONTACT</Link>
               </div>
            </div>


            <div className=" bg-[] flex justify-end pr-[50px] items-center gap-10 text-[1.5rem] text-deepgreen ">
                <span><CiMenuBurger /></span>
                <button onClick={toggleCart} className='  relative' ><HiOutlineShoppingCart /> <span className=' text-[13px] absolute bottom-0 right-[-10px]'>({totalItems})</span></button>
            </div>
            <Cart/>

        </section>
    </div>
  )
}

export default Header