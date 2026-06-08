// import React, { useEffect, useState } from 'react'

// export const ScrollProgressBar = () => {
//     const [scrollTop, setScrollTop] = useState(0);

//     const onScroll = () => {
//         const winScroll = document.documentElement.scrollTop;
//         const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         const scrolled = (winScroll / height) * 100;

//         setScrollTop(scrolled);
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", onScroll);

//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     return (
//         <div className="fixed top-0 z-50 w-full h-0.5 bg-light/50 dark:bg-dark/50 backdrop-blur-2xl">
//             <div
//                 style={{ transform: `scaleX(${scrollTop / 100})` }}
//                 className="h-full bg-primary origin-left transition-all duration-150 ease-linear shadow-[0_0_8px_theme(colors.primary),0_0_16px_theme(colors.primary)]"
//             ></div>
//         </div>
//     );
// };

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () =>
      window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        className="relative flex h-14 w-14 items-center justify-center rounded-full cursor-pointer
             hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]
             transition-all duration-300 ease-linear"
      >
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 64 64"
        >
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            className="stroke-dark/15 dark:stroke-light/15"
            strokeWidth="4"
          />

          {/* Progress Circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            className="stroke-primary"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 150ms ease",
            }}
          />
        </svg>

        <FaArrowUp
          size={16}
          className="relative z-10 text-dark dark:text-light"
        />
      </button>
    </div>
  );
}