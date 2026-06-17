import React from 'react'
import { Link } from 'react-router-dom';
import { useCopyEmail } from "../hooks/useCopyEmail";
import { Data } from "../data/data.js";
import { ContactIcon } from '../components/ui/ContactIcon.jsx';
import Logo from "../assets/logo/logo.png";
import { motion } from 'framer-motion';

export const Footer = () => {
    const { copied, copyEmail } = useCopyEmail();


    const handleClick = (link) => {

        if (link.copy) {
            copyEmail(link.value);
            return;
        }


        if (link.href) {
            window.open(
                link.href,
                link.external ? "_blank" : "_self"
            );
        }

    };

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
                        <motion.h1 className='font-bold sm:text-6xl text-4xl text-dark dark:text-light leading-12 sm:leading-18 tracking-wide' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}> Let's Make <br />  <span className='bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent font-medium italic tracking-normal sm:px-4 px-1'>Somthing good</span></motion.h1>
                    </div>
                    <div className="flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-4">
                        <div className='text-center sm:text-start'>
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "linear", delay: 0.6 }}>
                                <Link to="/"><img src={Logo} alt="Logo" className="w-12 h-12 sm:block hidden" /></Link>
                            </motion.div>
                            <motion.p className='dark:text-white/75 text-dark/75 text-sm' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "linear", delay: 0.8 }}>Crafting modern web experiences with clean design and code.</motion.p>
                        </div>
                        <div className='text-center'>
                            <motion.h5 className='mb-2 dark:text-white/75 text-dark/75 font-medium' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "linear", delay: 0.4 }}>Find Me Online</motion.h5>
                            <div className='flex items-center justify-center gap-4'>
                                {Data.contactLinks.map((link, index) => (
                                    <motion.div
                                        onClick={() => handleClick(link)}
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 30,
                                            scale: 0.5,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 1.2 + index * 0.15,
                                            type: "spring",
                                            stiffness: 200,
                                        }}

                                        className='relative inline-block'
                                    >

                                        <ContactIcon href={link.href} external={link.external} icon={<link.icon className="md:text-lg text-base" />} />
                                        {link.copy && copied && (
                                            <span
                                                className=" absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-xs px-2 py-1 rounded"
                                            >
                                                Email Copied!
                                            </span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className='border-dark/15 dark:border-light/15 my-6' />
                    <div>
                        <motion.p className='text-center text-sm dark:text-white/75 text-dark/75' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "linear", delay: 1 }}>&copy; {new Date().getFullYear()}. All rights reserved.</motion.p>
                    </div>
                </div>
            </footer>
        </>
    )
}

