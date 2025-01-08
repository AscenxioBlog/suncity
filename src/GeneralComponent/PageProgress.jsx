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
     <div className="fixed bottom-5 right-5 w-40 h-16 flex items-center justify-center z-50">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke="gray"
          strokeWidth="8"
          className="text-gray-300"
        />
        <circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke="#4caf50"
          strokeWidth="8"
          strokeLinecap="round"
          className="transition-all duration-300"
          style={{
            strokeDasharray: `${2 * Math.PI * 25}`,
            strokeDashoffset: `${2 * Math.PI * 25 * (1 - scrollPercentage / 100)}`,
          }}
        />
      </svg>
      <div className="absolute text-sm font-bold text-green-600">
        {Math.round(scrollPercentage)}%
      </div>
    </div>
    </div>
  )
}

export default PageProgress
