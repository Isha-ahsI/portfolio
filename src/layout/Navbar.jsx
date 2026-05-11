import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { Data } from "../data/data.js";
import { AiOutlineHome, AiFillHome, AiOutlineProject, AiFillProject } from "react-icons/ai";
import { RiUser3Line, RiUser3Fill } from "react-icons/ri";
import { HiSun, HiMoon } from "react-icons/hi2";
import { LiaDownloadSolid } from "react-icons/lia";

const iconMap = {
  homeLine: AiOutlineHome,
  aboutLine: RiUser3Line,
  projectLine: AiOutlineProject,
  homeFill: AiFillHome,
  aboutFill: RiUser3Fill,
  projectFill: AiFillProject,
};

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <nav className='lg:mx-46 md:mx-24 sm:mx-14 mx-8 fixed z-20 top-0 right-0 left-0 bg-primary-500/15 border border-primary-500/10 dark:bg-primary-300/15 dark:border-primary-300/10 backdrop-blur-2xl shadow-lg rounded-md my-10 px-8 py-6 shadow-2xl shadow-primary/15'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            {Data.navLinks.map((link) => {
              const IconLine = iconMap[link.iconLine];
              const IconFill = iconMap[link.iconFill];
              return (
                <NavLink key={link.id} to={link.to} className='text-2xl font-semibold mx-4 text-primary/75 hover:text-primary hover:scale-110 transition-all duration-300 ease-linear group'>
                  <div className="relative w-6 h-6 flex items-center justify-center">

                    <IconLine
                      className="absolute inset-0 transition-all duration-300 ease-linear group-hover:opacity-0 group-hover:scale-0 opacity-100 scale-100"
                    />

                    <IconFill
                      className="absolute inset-0 transition-all duration-300 ease-linear opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 drop-shadow-[0_0_12px_rgba(var(--color-primary-rgb),.75)]"
                    />

                  </div>
                </NavLink>
              )
            })}
          </div>
          <div className='flex items-center space-x-6'>
            <button onClick={() => setDarkMode(!darkMode)} className=" relative w-8 h-8 rounded-full bg-white/25 border border-white/25 dark:bg-primary/15 dark:border-white/15 flex items-center justify-center cursor-pointer backdrop-blur-2xl overflow-hidden dark:shadow-[0_0_25px_rgba(var(--color-primary-rgb),.25)] transition-all duration-500 "
            >
              <HiMoon
                className={` absolute text-primary transition-all duration-500 text-2xl ${darkMode ? "rotate-[360deg] scale-0" : "rotate-0 scale-100"} `}
              />

              <HiSun
                className={` absolute text-primary transition-all duration-500 text-2xl ${darkMode ? "rotate-[360deg] scale-100" : "rotate-0 scale-0"} `}
              />
            </button>
            <button
              className="cursor-pointer bg-gradient-to-b from-primary-500 to-primary-600 shadow-[0px_4px_32px_0_rgba(var(--color-primary-rgb),.25)] px-8 py-3 rounded-xl text-white font-medium group transition-all duration-300 ease-linear hover:scale-90 hover:shadow-[0px_4px_32px_0_rgba(var(--color-primary-rgb),.75)]"
            >
              <div className="relative overflow-hidden">
                <p
                  className="flex items-center gap-2 group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  <span>Resume / CV</span> <span className="text-lg"><LiaDownloadSolid /></span>
                </p>
                <p
                  className="flex items-center gap-2 absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  <span>Resume / CV</span> <span className="text-lg"><LiaDownloadSolid /></span>
                </p>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
