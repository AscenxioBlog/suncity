import React from 'react'



function Index2() {

    const firstmart=[
        {
            id:1,
            tag: '20% off',
            name: 'Portable Solar Panel',
            image: 'https://html.themewant.com/solari/assets/images/shop/01.png'
        },

        {
            id:2,
            tag: 'New Product',
            name: 'Portable Power Station',
            image: 'https://html.themewant.com/solari/assets/images/shop/02.png'
        },


        {
            id:3,
            tag: '50% Off ',
            name: 'Solar Powered Charger',
            image: 'https://html.themewant.com/solari/assets/images/shop/03.png'
        },


        {
            id:4,
            tag: 'Sale 35%  Off',
            name: 'Eco Flow Delta Portable Power',
            image: 'https://html.themewant.com/solari/assets/images/shop/04.png'
        },
    ]
  return (
    <div className=' min-h-[250px] w-full bg-[] mt-7'>
        <div className=" min-h-[250px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-2 pr-2">
            {
                firstmart.map((item)=>(
                    <div className="h-[250px] bg-lightgreen  grid grid-cols-[60%,40%] rounded-[10px] parentdiv pl-2 pr-2">
                <div className=" bg-[] space-y-8 pl-3">
                    <p className=' text-[1.3rem] font-semibold text-red-500'>{item.tag}</p>

                    <p className='text-[1.3rem] font-semibold'>{item.name}</p>

                    <button className=' mt-8 flex h-[50px] w-[120px] rounded-[10px] text-white font-semibold space-x-2 bg-deepgreen overflow-hidden relative group justify-center items-center'>Shop Now
                <div className="group-hover:left-0 transition-all duration-300 h-[55px] w-[50%] absolute bg-btncolor left-[-50%] flex justify-end items-center pr-1">Shop</div>
                <div className=" group-hover:right-0 h-[55px] w-[50%] bg-btncolor absolute right-[-50%] transition-all duration-300 flex justify-start pl-1 items-center">Now</div>
            </button>
                </div>

                <div className=" bg-[] flex justify-center items-center overflow-hidden">
                    <div className="group-hover:scale-75 h-[150px] w-[90%] bg-[] childdiv">
                        <img src={item.image} className=' h-[100%] w-[100%]' alt="" />
                    </div>
                </div>
            </div>
                ))
            }
            {/* <div className="h-[250px] bg-teal-700 "></div>
            <div className="h-[250px] bg-teal-700 "></div>
            <div className="h-[250px] bg-teal-700 "></div> */}
        </div>
    </div>
  )
}

export default Index2