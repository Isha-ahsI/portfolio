
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div className="fixed bottom-6 right-6 z-50" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'linear', delay: 1 }}>
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
    </motion.div>
  );
}