import React, { useContext } from 'react'
import { BiSolidMessageAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import paypal from '../../assets/Paypal.png'
import { AppContext } from '../../GeneralComponent/ContextApp';
import { TbCurrencyNaira } from "react-icons/tb";


function Checkout2() {

      const {
        toggleCart,
        isCartOpen,
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        calculateTotal,
      } = useContext(AppContext);


      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
      
        // Convert FormData to an object
        const data = Object.fromEntries(formData.entries());
        console.log(data);
      
        // Submit `data` to the server
      };
      
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
        <div className=" min-h-[500px] w-[90%]  grid grid-cols-1 md:grid-cols-[68%,30%] gap-3">
            <div className=" bg-[#F6F6F6]   mb-[100px]">
                <div className=" h-[80px] w-full text-[25px] font-bold">
                    <h1>Billing details</h1>
                </div>

                <form action="" className=' space-y-4' onSubmit={handleSubmit}>
                    <div className=" min-h-[100px] w-full  grid grid-cols-1 md:grid-cols-2">
                        <div className="  flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>First Name*</label>
                            <input type="text" name='firstname' className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                        <div className="  flex flex-col justify-between">
                        <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Last Name*</label>
                        <input type="text" name='lastname' className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                    </div>



                    <div className=" min-h-[80px] w-full  grid grid-cols-1 md:grid-cols-2">
                        <div className="  flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Phone Number*</label>
                            <input type="text" name='phone' className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                        <div className="  flex flex-col justify-between">
                        <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Email Address*</label>
                        <input type="text" name='email' className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                    </div>


                    <div className=" h-[80px] w-full  ">
                        <div className=" h-[80px]  w-full flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Company's Name(optional)</label>
                            <input type="text" name='company' className=' h-[45px] w-[98%] outline-deepgreen border-deepgreen border-[1px]' />
                        </div>
                       
                    </div>


                    <div className=" h-[80px] w-full  ">
                        <div className=" h-[80px]  w-full flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Street Address*</label>
                            <input type="text" name='street' className=' h-[45px] w-[98%] outline-deepgreen border-deepgreen border-[1px]' />
                        </div>
                       
                    </div>


                    <div className=" min-h-[80px] w-full  grid grid-cols-1 md:grid-cols-2">
                        <div className="  flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Nearest Bustop*</label>
                            <input type="text" bus_stop className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                        <div className="  flex flex-col justify-between">
                        <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>Town/City*</label>
                        <input type="text" name='town' className=' h-[45px] w-[95%] outline-deepgreen border-deepgreen border-[1px] ' />
                        </div>
                    </div>


                    <div className=" h-[80px] w-full  mb-[100px] ">
                        <div className=" h-[80px]  w-full flex flex-col justify-between">
                            <label htmlFor="" className=' text-[13px] font-bold text-slate-400'>State*</label>
                            <input type="text" name='town' className=' h-[45px] w-[98%] outline-deepgreen border-deepgreen border-[1px]' />
                        </div>
                       
                    </div> 
                    <div className=" min-h-[300px] w-full ">

                        <div className=" h-[100px] w-full  flex items-end pb-5 pl-3 font-semibold text-[25px]">
                            <span>Your Order</span>
                        </div>
                        
                    <div className=" min-h-[200px] w-[98%] border-[2px] border-[gray]">
                        <div className=" h-[40px] w-full  grid grid-cols-[65%,35%] border-b-[2px] border-[gray]">
                            <div className=" flex items-center pl-3 font-medium"> 
                                <span>PRODUCT</span>
                            </div>
                            <div className="  border-l-[2px] border-[gray] flex items-center pl-3 font-medium">
                                <span>TOTAL</span>
                            </div>
                        </div>

                       
                        {
                            cart.map((item, index) => (
                                <div
                                key={index}
                                className="h-[40px] grid grid-cols-[65%,35%] border-b-[2px] border-[gray]"
                                >
                                {/* Item Name and Quantity */}
                                <div className="flex items-center pl-3 font-medium">
                                    <input
                                    type="text"
                                    name={`itemName_${index}`}
                                    defaultValue={`${item.name} X ${item.quantity}`}
                                    className="bg-transparent border-none focus:outline-none"
                                    readOnly
                                    />
                                </div>

                                {/* Item Price */}
                                <div className="border-l-[2px] border-[gray] flex items-center pl-3 font-medium">
                                    <input
                                    type="text"
                                    name={`itemPrice_${index}`}
                                    defaultValue={`N${(item.price * item.quantity).toFixed(2)}`}
                                    className="bg-transparent border-none focus:outline-none"
                                    readOnly
                                    />
                                </div>
                                </div>
                            ))
                            }


                   


                        
                    </div>
                    <div className=" h-[40px] w-[98%] border-l-[2px] border-r-[2px]  grid grid-cols-[65%,35%] border-b-[2px] border-[gray]">
                            <div className=" flex items-center pl-3 font-medium"> 
                                <span>TOTAL</span>
                            </div>
                            <div className="  border-l-[2px] border-[gray] flex items-center pl-3 font-medium">
                                <span className=' flex items-center'><TbCurrencyNaira />{calculateTotal().toFixed(2)}</span>
                            </div>
                        </div>
                 
                    </div>


                    <div className=" h-[120px] w-full ">
                        <div className="h-[60px] w-full  flex items-center gap-3">
                            <span className=' text-[gray] font-semibold'>PayPal</span> <img src={paypal} alt="" />
                        </div>
                        <div className="h-[40px] w-full bg-slate-200 text-[gray] flex items-center">
                            <span>Pay via PayPal you can pay with your credit card if you dont have a PayPal account.</span>
                        </div>
                    </div>


                    <div className=" h-[100px] w-full border-t-[1px] border-[gray] text-[gray] text-[14px] font-semibold">
                        <span>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</span>
                    </div>

                    <button className='  mt-8 flex h-[50px] w-[98%] rounded-[10px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center'>Continue to Payment
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-1">Continue to</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-1 items-center">Payment</div>
            </button>




                </form>
            </div>
            <div className=" ">
                <div className=" h-[80px] w-full  text-[25px] font-bold flex items-center">
                    <span>Your Order</span>
                </div>

                {
                    cart.map((item)=>(
                        <div id={item.id} className=" h-[100px] mb-1 w-full  grid grid-cols-[32%,67%] gap-1">
                    <div className="h-[100px] ">
                        <img src={item.image} className=' h-[100%] w-[100%]' alt="" />
                    </div>
                    <div className="h-[100px] ">
                            <div className=" h-[50px] w-full  font-bold">
                            <span>{item.name}</span> × <span>{item.quantity}</span>
                            </div>
                            <div className=" h-[50px] w-full  text-deepgreen">
                                <span className=' flex items-center'><TbCurrencyNaira />{item.price}</span>
                            </div>
                    </div>
                </div>
                    ))
                }


                <div className=" h-[50px] w-full border-b-[2px] border-[gray] flex justify-between items-center font-bold text-[gray]">
                    <span>TOTAL</span>
                <span className=' flex items-center'><TbCurrencyNaira />{calculateTotal().toFixed(2)}</span>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Checkout2
