import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";

export const Navbar = () => {
    return (
        <>
            <nav className='lg:mx-46 md:mx-24 sm:mx-14 mx-8 fixed top-0 right-0 left-0 bg-primary-500/5 border border-primary-500/10 dark:bg-primary-300/5 dark:border-primary-300/10 backdrop-blur-3xl shadow-lg rounded-md my-10 px-16 py-8 shadow-2xl shadow-primary/15'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to="/" className='text-lg font-semibold mx-4'><AiOutlineHome /></Link>
                        <Link to="/" className='text-lg font-semibold mx-4'><AiOutlineUser /></Link>
                        <Link to="/" className='text-lg font-semibold mx-4'><GoProjectSymlink /></Link>
                    </div>
                    <div className='flex items-center'>
                        <button
  className="
    group relative overflow-hidden
    rounded-xl px-6 py-3
    bg-primary-500
    text-white font-semibold
    transition-all duration-300
    hover:shadow-[0_0_40px_rgba(99,102,241,0.45)]
  "
>
  <div className="relative h-6 overflow-hidden">
    
    <span className="block transition-transform duration-500 group-hover:-translate-y-full">
      Hire Me
    </span>

    <span className="absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 flex items-center justify-center">
      Hire Me
    </span>

  </div>
</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
