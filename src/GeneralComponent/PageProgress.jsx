import React, { useEffect, useState } from 'react';
function PageProgress() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable area
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
     <div className="fixed  bottom-[20px] right-0 w-30 h-16 flex items-center justify-end z-50">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
        <circle
          cx="30"
          cy="35"
          r="20"
          fill="none"
          stroke="gray"
          strokeWidth="5"
          className="text-gray-300"
        />
        <circle
          cx="30"
          cy="35"
          r="20"
          fill="none"
          stroke="#4caf50"
          strokeWidth="5"
          strokeLinecap="round"
          className="transition-all duration-300"
          style={{
            strokeDasharray: `${2 * Math.PI * 25}`,
            strokeDashoffset: `${2 * Math.PI * 25 * (1 - scrollPercentage / 100)}`,
          }}
        />
      </svg>
      <div className="absolute mr-3  text-sm font-bold text-green-600">
        {Math.round(scrollPercentage)}%
      </div>
    </div>
    </div>
  )
}

export default PageProgress
