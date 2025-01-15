// import React, { useContext, useState } from 'react'
// import { TbCurrencyNaira } from "react-icons/tb";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { MdOutlineFavoriteBorder } from "react-icons/md";
// import { IoEyeOutline } from "react-icons/io5";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
// import { AppContext } from '../../GeneralComponent/ContextApp';

// function Shop2() {
//   const { addToCart } = useContext(AppContext);

    // const Solarproduct = [
    //     {
    //         id: '1',
    //         name: 'Solar Power Boards',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/05.jpg',
    //         price: 199.00,
    //         oldprice: '299.00'
    //     },


    //     {
    //         id: '2',
    //         name: 'Solar Power Boards',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/06.jpg',
    //         price: 124.00,
    //         oldprice: '199.00'
    //     },

    //     {
    //         id: '3',
    //         name: 'Enphase Micro Inverter',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/07.jpg',
    //         price: 169.00,
    //         oldprice: '285.00'
    //     },


    //     {
    //         id: '4',
    //         name: 'Blavo Solar Charger',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/08.jpg',
    //         price: 153.00,
    //         oldprice: '249.00'
    //     },

    //     {
    //         id: '5',
    //         name: 'Solar Power House',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/08.jpg',
    //         price: 199.00,
    //         oldprice: '299.00'
    //     },


    //     {
    //         id: '6',
    //         name: 'Blue Planet Inverter',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/10.jpg',
    //         price: 199.00,
    //         oldprice: '299.00'
    //     },

    //     {
    //         id: '7',
    //         name: 'Solar Light Boards',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/11.jpg',
    //         price: 199.00,
    //         oldprice: '299.00'
    //     },


    //     {
    //         id: '8',
    //         name: 'Eco Plannet Power',
    //         image: 'https://html.themewant.com/solari/assets/images/shop/12.jpg',
    //         price: 199.00,
    //         oldprice: '299.00'
    //     },
    // ]

//      // Pagination state
//      const [currentPage, setCurrentPage] = useState(1);
//      const itemsPerPage = 12;
   
//      // Calculate total pages
//      const totalPages = Math.ceil(Solarproduct.length / itemsPerPage);
   
//      // Get current page items
//      const indexOfLastItem = currentPage * itemsPerPage;
//      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//      const currentItems = Solarproduct.slice(indexOfFirstItem, indexOfLastItem);
   
//      const handlePageChange = (page) => {
//        if (page > 0 && page <= totalPages) {
//          setCurrentPage(page);
//        }
//      };
//   return (
//     <div className=' min-h-[100vh] w-full bg-[] '>
        // <div className=" h-[60px] w-full sticky top-0 z-50 flex justify-between gap-1 items-center">
        //     <div className=" ">
        //     <select className="select select-error w-full max-w-xs bg-lightgreen">
        //         <option disabled selected>What is the best headless CMS</option>
        //         <option>Strapi</option>
        //         <option>Ghost</option>
        //         <option>Netlify CMS</option>
        //         <option>Sanity</option>
        //     </select>
        //     </div>

        //     <div className="">
        //     <select className="select select-error w-full max-w-xs bg-lightgreen">
        //         <option disabled selected>What is the best headless CMS</option>
        //         <option>Strapi</option>
        //         <option>Ghost</option>
        //         <option>Netlify CMS</option>
        //         <option>Sanity</option>
        //     </select>
        //     </div>
        // </div>

        // <div className=" mt-5">
        //          <div className=" min-h-[350px] w-full flex justify-center">
        //             <div className=" min-h-[350px] w-[90%] bg- grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        //                    {
        //                     currentItems.map((product)=>(
        //                         <div className="productdiv transition-all h-[380px] bg-[] flex flex-col items-center">
        //                         <div className=" h-[260px] w-[90%]  bg-[#F6F6F6]  relative flex justify-center items-center">
        //                             <div className="productpics transition-all duration-400 h-[200px] w-[70%] bg-[] ">
        //                                 <img src={product.image} className=' h-[100%] w-[100%]' alt="" />
        //                             </div>
        //                             <div className=" subdiv transition-all duration-400 h-[260px] w-full absolute top-0  flex justify-center items-center gap-7 text-[23px] ">
        //                                 <div className=' h-[35px] w-[35px] bg-white text-deepgreen hover:bg-deepgreen hover:text-white rounded-[50%] flex justify-center items-center transition-all'><MdOutlineFavoriteBorder /></div>
        //                                 <div className=' h-[35px] w-[35px] bg-white text-deepgreen hover:bg-deepgreen hover:text-white rounded-[50%] flex justify-center items-center transition-all'><IoEyeOutline /></div>
        //                                 <div className=' h-[35px] w-[35px] bg-white text-deepgreen hover:bg-deepgreen hover:text-white rounded-[50%] flex justify-center items-center transition-all'><FaArrowRightArrowLeft /></div>
        //                             </div>
        //                         </div>
        //                         <div className=" h-[120px] w-[90%] ">
        //                             <div className=" h-[60px] w-full  text-[1.2rem] font-semibold flex justify-center items-center">
        //                                 <h1>{product.name}</h1>
        //                             </div>
            
        //                             <div className=" h-[60px] w-full bg-[] overflow-hidden font-semibold" >
        //                                 <div className="transition-all duration-400 price1 h-[60px] w-full flex justify-center gap-10 ">
        //                                     <span className=' flex items-center'><TbCurrencyNaira /> {product.price}</span>
        //                                     <span className=' flex items-center text-[gray]'><del className=' flex items-center'><TbCurrencyNaira /> {product.oldprice}</del></span>
        //                                 </div>
        //                                 <button onClick={addToCart} className=" price2 h-[60px] w-full flex justify-center items-center gap-3"> <HiOutlineShoppingCart className=' text-red-500' /> Buy Now</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     ))
        //                    }
            
            
            
                            
        //                 </div>

    
        //             </div>
        // </div>
//                                {/* Pagination Controls */}
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
//         >
//           Previous
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-3 py-2 mx-1 rounded ${
//               currentPage === index + 1 ? ' bg-deepgreen text-white' : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
//         >
//           Next
//         </button>
//       </div>
      
//     </div>
//   )
// }

// export default Shop2


import React, { useContext, useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { AppContext } from "../../GeneralComponent/ContextApp";

function Shop2() {
  const { addToCart } = useContext(AppContext);

  const Solarproduct = [
    {
        id: '1',
        name: 'Solar Power Boards',
        image: 'https://html.themewant.com/solari/assets/images/shop/05.jpg',
        price: 199.00,
        oldprice: '299.00'
    },


    {
        id: '2',
        name: 'Solar Power Boards',
        image: 'https://html.themewant.com/solari/assets/images/shop/06.jpg',
        price: 124.00,
        oldprice: '199.00'
    },

    {
        id: '3',
        name: 'Enphase Micro Inverter',
        image: 'https://html.themewant.com/solari/assets/images/shop/07.jpg',
        price: 169.00,
        oldprice: '285.00'
    },


    {
        id: '4',
        name: 'Blavo Solar Charger',
        image: 'https://html.themewant.com/solari/assets/images/shop/08.jpg',
        price: 153.00,
        oldprice: '249.00'
    },

    {
        id: '5',
        name: 'Solar Power House',
        image: 'https://html.themewant.com/solari/assets/images/shop/08.jpg',
        price: 199.00,
        oldprice: '299.00'
    },


    {
        id: '6',
        name: 'Blue Planet Inverter',
        image: 'https://html.themewant.com/solari/assets/images/shop/10.jpg',
        price: 199.00,
        oldprice: '299.00'
    },

    {
        id: '7',
        name: 'Solar Light Boards',
        image: 'https://html.themewant.com/solari/assets/images/shop/11.jpg',
        price: 199.00,
        oldprice: '299.00'
    },


    {
        id: '8',
        name: 'Eco Plannet Power',
        image: 'https://html.themewant.com/solari/assets/images/shop/12.jpg',
        price: 199.00,
        oldprice: '299.00'
    },
]

  const itemsPerPage = 4; // Change as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(Solarproduct.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Solarproduct.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-[100vh] w-full">
      {/* Header */}
      {/* <div className="h-[60px] w-full sticky top-0 z-50 flex justify-between items-center">
        <select className="select select-error w-full max-w-xs bg-lightgreen">
          <option disabled selected>
            Sort by
          </option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div> */}

<div className=" h-[60px] w-full sticky top-0 z-50 flex justify-between gap-1 items-center">
            <div className=" ">
            <select className="select select-error w-full max-w-xs bg-lightgreen">
                <option disabled selected>What is the best headless CMS</option>
                <option>Strapi</option>
                <option>Ghost</option>
                <option>Netlify CMS</option>
                <option>Sanity</option>
            </select>
            </div>

            <div className="">
            <select className="select select-error w-full max-w-xs bg-lightgreen">
                <option disabled selected>What is the best headless CMS</option>
                <option>Strapi</option>
                <option>Ghost</option>
                <option>Netlify CMS</option>
                <option>Sanity</option>
            </select>
            </div>
        </div>

      {/* Products
      <div className="mt-5">
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((product) => (
            <div key={product.id} className="productdiv flex flex-col items-center">
              <div className="h-[260px] w-full bg-[#F6F6F6] flex justify-center items-center relative">
                <img src={product.image} alt={product.name} className="h-[200px]" />
                <div className="absolute top-0 w-full flex justify-center items-center gap-5 text-[20px]">
                  <MdOutlineFavoriteBorder />
                  <IoEyeOutline />
                  <FaArrowRightArrowLeft />
                </div>
              </div>
              <div className="text-center mt-2">
                <h1 className="font-bold">{product.name}</h1>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-red-500">
                    <TbCurrencyNaira /> {product.price}
                  </span>
                  <del className="text-gray-500">
                    <TbCurrencyNaira /> {product.oldprice}
                  </del>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  <HiOutlineShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

<div className=" mt-5">
                 <div className=" min-h-[350px] w-full flex justify-center">
                    <div className=" min-h-[350px] w-[90%] bg- grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                           {
                            currentItems.map((product)=>(
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
                                            <span className=' flex items-center'><TbCurrencyNaira /> {product.price}</span>
                                            <span className=' flex items-center text-[gray]'><del className=' flex items-center'><TbCurrencyNaira /> {product.oldprice}</del></span>
                                        </div>
                                        <button 
                                        onClick={ () => addToCart(product)}
                                        // onClick={() => addToCart(product)}
                                         className=" price2 h-[60px] w-full flex justify-center items-center gap-3"> <HiOutlineShoppingCart className=' text-red-500' /> Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            ))
                           }
            
            
            
                            
                        </div>

    
                    </div>
        </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 mx-1 rounded ${
              currentPage === index + 1 ? "bg-deepgreen text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Shop2;
