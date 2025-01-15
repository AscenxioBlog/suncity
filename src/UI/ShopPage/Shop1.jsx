import React from 'react'
import { useInView } from "react-intersection-observer";

function Shop1() {
    const { ref: desktopRef, inView: desktopInView } = useInView({ triggerOnce: true });
  const { ref: mobileRef, inView: mobileInView } = useInView({ triggerOnce: true });
  return (
    <div className=" h-[400px] md:h-[500px] w-full bg-[url(assets/shopimage.jpg)] bg-cover bg-center flex justify-center items-center">
        <div className=" h-[400px] hidden md:inline-block relative ">
        <div className="  md:text-[120px] lg:text-[200px] font-bold flex justify-center items-center h-full gap-2">
    <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>S</span>
    <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>H</span>
    <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>O</span>
    <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>P</span>
    <span className="ml-4 text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.5px white" }}>P</span>
    <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>A</span>
    <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>G</span>
    <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>E</span>
  </div>
  <div  ref={desktopRef}
      style={{
        opacity: desktopInView ? 1 : 0,
        transform: desktopInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-in-out",
      }}
   className=" h-[200px] w-full text-white absolute top-[30%] flex flex-col justify-end items-center">
    <h1 className=' text-[60px] font-bold'> SHOP PAGE</h1>
    <p className='font-bold '>HOME/SHOP</p>
  </div>
        </div>

<div className=" md:hidden">
<div className="  h-[150px] w-full text-white flex flex-col justify-end items-center" 
      ref={mobileRef}
      style={{
        opacity: mobileInView ? 1 : 0,
        transform: mobileInView ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-in-out",
      }}
      >
    <h1 className=' text-[60px] font-bold'> SHOP PAGE</h1>
    <p className='font-bold '>HOME/SHOP</p>
  </div>
</div>
</div>

  )
}

export default Shop1
