import React from 'react'
import { Link } from 'react-router-dom';
import { Data } from "../data/data.js";
import { ContactIcon } from '../components/ui/ContactIcon.jsx';
import Logo from "../assets/logo/logo.png"

export const Footer = () => {
    return (
        <>
            <footer className='relative overflow-hidden border-t dark:border-light/15 border-dark/15 bg-gradient-to-b
from-light
to-transparent
dark:from-slate-900/75
dark:to-transparent'>
                <div className='max-w-6xl mx-auto pt-24 pb-8 sm:px-6 sm:pt-28 px-4'>
                    <div className="text-center flex flex-col items-center justify-center gap-2 mb-4 md:mb-16 sm:mb-12">
                        <Link to="/"><img src={Logo} alt="Logo" className="w-12 h-12 sm:hidden block" /></Link>
                        <h1 className='font-bold sm:text-6xl text-4xl text-dark dark:text-light leading-12 sm:leading-18 tracking-wide'>Let's Make <br />  <span className='bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent font-medium italic tracking-normal sm:px-4 px-1'>Somthing good</span></h1>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-4">
                        <div className='text-center sm:text-start'>
                            <Link to="/"><img src={Logo} alt="Logo" className="w-12 h-12 sm:block hidden" /></Link>
                            {/* <h1 className='text-primary font-bold text-xl mb-1'>Isha Makvane</h1> */}
                            <p className='dark:text-white/75 text-dark/75 text-sm'>Crafting modern web experiences with clean design and code.</p>
                        </div>
                        <div className='text-center'>
                            <h5 className='mb-2 dark:text-white/75 text-dark/75 font-medium'>Find Me Online</h5>
                            <div className='flex items-center justify-center gap-4'>
                                {Data.contactLinks.map((link, index) => (
                                    <ContactIcon key={index} to={link.href} external={link.external} icon={<link.icon className="md:text-lg text-base" />} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className='border-dark/15 dark:border-light/15 my-6' />
                    <div>
                        <p className='text-center text-sm dark:text-white/75 text-dark/75'>&copy; {new Date().getFullYear()}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

