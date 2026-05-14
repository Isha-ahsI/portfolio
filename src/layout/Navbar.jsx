import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import Button from "../components/ui/button";
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
      <nav className=' fixed z-50 top-0 right-0 left-0 my-6 mx-8 sm:mx-6'>
        <div className='max-w-6xl mx-auto flex items-center justify-between bg-primary-500/15 border border-primary-500/10 dark:bg-primary-300/15 dark:border-primary-300/10 backdrop-blur-2xl shadow-lg rounded-md shadow-2xl shadow-primary/15 px-6 py-4'>
          {/*leftside  navlinks  */}
          <div className='lg:flex hidden items-center'>
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
          {/* middleside logo */}
          <div className="lg:mx-auto me-auto">
            <Link>Logo</Link>
          </div>
          {/* rightside */}
          <div className='flex items-center sm:space-x-6 space-x-4'>
            {/* light-dark button */}
            <button onClick={() => setDarkMode(!darkMode)} className=" relative w-8 h-8 rounded-full bg-white/75 border border-white/75 dark:bg-primary/15 dark:border-white/15 flex items-center justify-center cursor-pointer backdrop-blur-2xl overflow-hidden dark:shadow-[0_0_25px_rgba(var(--color-primary-rgb),.25)] transition-all duration-500 "
            >
              <HiMoon
                className={` absolute text-primary transition-all duration-500 text-2xl ${darkMode ? "rotate-[360deg] scale-0" : "rotate-0 scale-100"} `}
              />

              <HiSun
                className={` absolute text-primary transition-all duration-500 text-2xl ${darkMode ? "rotate-[360deg] scale-100" : "rotate-0 scale-0"} `}
              />
            </button>
            {/* resume download button */}
            <Button
              variant="primary"
              useCustomSize
              icon={<LiaDownloadSolid className="text-lg sm:ms-2" />}
              className='sm:px-6 sm:py-3 px-2 py-2 md:text-base text-sm sm:rounded-xl rounded-full'
            >
              <span className="sm:block hidden">
                Resume / CV
              </span>
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}
