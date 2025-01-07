import React, { useEffect, useRef, useState } from "react";

function Homefirst() {

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once it's visible
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => observer.disconnect();
    }, []);
  return (
    <div>
          <div
      ref={sectionRef}
      className={ ` transform transition-[2s] duration-[2s] ease-in-out ${
        isVisible ? "opacity-100 skew-y-0" : " opacity-0 skew-y-[25deg]"
      }`}
    >
      <h1 className=' text-[1.4rem] lg:text-[2.6rem] font-bold  lg:flex lg:flex-col '><span>We believe solar</span>  <span>power</span> <span>should be accessibles</span></h1>

    </div>
    </div>
  )
}

export default Homefirst
