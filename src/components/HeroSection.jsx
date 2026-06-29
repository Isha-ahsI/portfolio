import React, { useState, useEffect } from 'react'
import { useCopyEmail } from "../hooks/useCopyEmail";
import Button from './ui/Button'
import { Link } from 'react-router-dom'
import GradientBlobs from './ui/GradientBlobs'
import { ParticleBg } from '../components/ui/ParticleBg'
import { FaHandshake, FaCode } from "react-icons/fa";
import { TbDevicesCode } from "react-icons/tb";
import Avatar from "../assets/avatar.png"
import { motion } from 'framer-motion';
import { SectionBadge } from './ui/SectionBadge';

const MotionLink = motion.create(Link);

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.8,
        },
    },
};


const item = (isLarge) => ({
    hidden: {
        opacity: 0,
        x: isLarge ? -100 : 0,
        y: isLarge ? 0 : 50,
    },

    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "linear",
        },
    },
});

const imageContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 1,
        },
    },
};


const scaleItem = {
    hidden: {
        opacity: 0,
        scale: 0,
    },

    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "linear",
        },
    },
};

export const HeroSection = () => {

    const [isLarge, setIsLarge] = useState(
        () => window.innerWidth >= 1024
    );

    const { copied, copyEmail } = useCopyEmail();


    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <section id="home" className='relative flex flex-col min-h-[100svh] items-center justify-center overflow-hidden'>
                {/* background gredientblobs */}
                <GradientBlobs className='absolute inset-0 z-0' />
                {/* background particles */}
                <ParticleBg className="absolute top-0 left-0 w-full h-full z-10" />
                {/* background blur overlay */}
                <div className="absolute inset-0 h-full w-full z-20 bg-white/25 dark:bg-black/25 backdrop-blur-[0.25px]" />
                <div className='relative z-30 mx-auto grid w-full max-w-7xl grid-cols-1 items-center px-4 sm:px-8 lg:pt-24 pt-34 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(220px,380px)] gap-16'>
                    {/* herosection content */}
                    <motion.div className='flex flex-col justify-center lg:items-start items-center lg:text-start text-center' variants={container}
                        initial="hidden"
                        animate="show">
                        <motion.div variants={item(isLarge)}>
                            <SectionBadge text="Available for Work" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                        </motion.div>
                        <motion.h1 variants={item(isLarge)} className='text-primary sm:text-6xl text-4xl font-bold lg:leading-16 tracking-wide'>Hey, I'm <br /> <span className='bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent underline underline-offset-8'>Isha Makvane</span></motion.h1>
                        <motion.h2 variants={item(isLarge)} className='dark:text-light text-dark text-2xl mt-4 font-medium tracking-wide'>Web Designer & Developer</motion.h2>
                        <motion.p variants={item(isLarge)} className='dark:text-white/75 text-dark/75 md:text-lg text-base mt-4 '>Crafting modern, responsive, and visually engaging websites that deliver exceptional user experiences and elevate digital brands.</motion.p>
                        <motion.div variants={item(isLarge)} className='relative inline-block'>
                            <Button
                                onClick={() => copyEmail("ishamakvane@gmail.com")}
                                variant="outline"
                                icon={<FaHandshake className="text-lg" />}
                                iconPosition="left"
                                className='mt-4 gap-2'
                            >
                                Hire Me
                            </Button>
                            {copied && (
                                <span
                                    className=" absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-slate-950 text-white px-3 py-1 rounded whitespace-nowrap"
                                >
                                    Email copied!
                                </span>
                            )}
                        </motion.div>
                    </motion.div>
                    {/* hero image */}
                    <motion.div className='flex items-center justify-center' variants={imageContainer}
                        initial="hidden"
                        animate="show">
                        <motion.div variants={scaleItem} className="relative max-h-75 max-w-75 rounded-lg bg-primary backdrop-blur-md shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.5)] lg:mx-0 mx-8" data-primary-bg >
                            <motion.img variants={scaleItem} src={Avatar} alt="avatar" className='origin-bottom h-full w-full relative z-20' />
                            <motion.div variants={scaleItem} className="absolute z-10 top-0 left-0 rounded-lg h-full w-full border border-dashed border-dark/50 dark:border-light/50 bg-transparent -ml-6 -mt-6"></motion.div>
                            <motion.div variants={scaleItem} className="absolute z-0 h-full w-full bg-primary/10 rounded-lg backdrop-blur-sm top-0 left-0 ml-6 mt-6"></motion.div>
                            <motion.div className='w-12 h-12 bg-white/75 backdrop-blur-xs rounded-lg text-primary flex items-center justify-center absolute z-30 -left-4 top-3/4 -rotate-12'
                                animate={{
                                    rotate: [-12, 0, 12, 0, -12],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}>
                                <FaCode className='text-2xl' />
                            </motion.div>
                            <motion.div className='w-12 h-12 bg-white/75 backdrop-blur-xs rounded-lg text-primary flex items-center justify-center absolute z-30 -right-4 bottom-3/4 rotate-12' animate={{
                                rotate: [12, 0, -12, 0, 12],
                            }}
                                transition={{
                                    delay: 0.2,
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}>
                                <TbDevicesCode className='text-2xl' />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
                {/* scroll down indicator */}
                <motion.div className="relative lg:absolute z-40 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:mb-0 mb-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'linear', delay: 1 }}>
                    <div className="relative w-[30px] h-[50px] border-2 border-primary rounded-full cursor-pointer">

                        {/* animated dot */}
                        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-primary rounded-full animate-scrolldown shadow-[0px_-5px_3px_1px_rgba(var(--color-primary-rgb),0.4)]" />

                        {/* chevrons */}
                        <div className="flex flex-col items-center mt-[48px]">
                            <div className="w-[10px] h-[10px] border-r-2 border-b-2 border-primary rotate-45 animate-pulseFade" />
                            <div className="w-[10px] h-[10px] border-r-2 border-b-2 border-primary rotate-45 animate-pulseFade-delay" />
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
