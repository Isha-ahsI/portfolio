import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Optional: add a spring physics to the progress for an even smoother feeling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  
  // Transform progress (0 to 1) into dash offset (circumference to 0)
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [circumference, 0]);

  return (
    <motion.div className="fixed bottom-6 right-6 z-50" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'linear', delay: 1 }}>
      <button
        onClick={scrollToTop}
        className="relative flex h-14 w-14 items-center justify-center rounded-full cursor-pointer
             hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.6)]
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
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            className="stroke-primary"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeLinecap="round"
            style={{
              strokeDashoffset
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