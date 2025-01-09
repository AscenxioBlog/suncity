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
      
    >
      <h1 ref={sectionRef}
      className={ ` transform transition-[1s] duration-[1s] ease-in-out  text-[1.4rem] lg:text-[2.6rem] font-bold  lg:flex lg:flex-col ${
        isVisible ? "opacity-100 translate-y-0" : " opacity-0 translate-y-[40px]"
      }`}><span>We believe solar</span>  <span>power</span> <span>should be accessibles</span></h1>

    </div>
    </div>
  )
}

export default Homefirst
