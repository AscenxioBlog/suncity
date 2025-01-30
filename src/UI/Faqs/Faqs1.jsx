import React from 'react'
import { useInView } from "react-intersection-observer";

function Faqs1() {
    const { ref: desktopRef, inView: desktopInView } = useInView({ triggerOnce: true });
    const { ref: mobileRef, inView: mobileInView } = useInView({ triggerOnce: true });

  return (
    <div className=' h-[400px]  md:h-[500px] w-full bg-red-500'>
    <div className=" h-[400px] md:h-[500px] w-full bg-[url(assets/shopimage.jpg)] bg-cover bg-center flex justify-center items-center">
     <div className=" h-[400px] hidden md:inline-block relative ">
     <div className="  md:text-[93px] lg:text-[180px] font-bold flex justify-center items-center h-full gap-2">
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>A</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>n</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>y</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text ml-4"style={{ WebkitTextStroke: "0.3px white" }}>Q</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>u</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>e</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>s</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>t</span>
 <span className=" text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.5px white" }}>i</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>o</span>
 <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>n</span>
 {/* <span className="text-transparent bg-center bg-cover bg-clip-text" style={{ WebkitTextStroke: "0.3px white" }}>E</span> */}
</div>
<div  ref={desktopRef}
   style={{
     opacity: desktopInView ? 1 : 0,
     transform: desktopInView ? "translateY(0)" : "translateY(50px)",
     transition: "all 0.8s ease-in-out",
   }}
className=" h-[200px] w-full text-white absolute top-[30%] flex flex-col justify-end items-center">
 <h1 className='text-[60px] font-bold'> Any Question</h1>
 <p className='font-bold '>HOME/FAQS</p>
</div>
     </div>

<div className=" md:hidden">
<div className="  h-[150px] w-full text-white flex flex-col justify-center items-center" 
   ref={mobileRef}
   style={{
     opacity: mobileInView ? 1 : 0,
     transform: mobileInView ? "translateY(0)" : "translateY(50px)",
     transition: "all 0.8s ease-in-out",
   }}
   >
 <h1 className=' text-[40px] font-bold'> CHECKOUT PAGE</h1>
 <p className='font-bold '>HOME/CHECKOUT</p>
</div>
</div>
</div>
 </div>
  )
}

export default Faqs1
