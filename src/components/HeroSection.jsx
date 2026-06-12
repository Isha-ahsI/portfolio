import React from 'react'
import Button from './ui/Button'
import { Link } from 'react-router-dom'
import GradientBlobs from './ui/GradientBlobs'
import { ParticleBg } from '../components/ui/ParticleBg'
import { FaHandshake } from "react-icons/fa";
import Avatar from "../assets/avatar.png"
import { motion } from 'framer-motion';
import { SectionBadge } from './ui/SectionBadge';

const MotionLink = motion.create(Link);
export const HeroSection = () => {
    return (
        <>
            <section className='relative flex flex-col min-h-[100svh] items-center justify-center overflow-hidden'>
                {/* background gredientblobs */}
                <GradientBlobs className='absolute inset-0 z-0' />
                {/* background particles */}
                <ParticleBg className="absolute top-0 left-0 w-full h-full z-10" />
                {/* background blur overlay */}
                <div className="absolute inset-0 h-full w-full z-20 bg-white/25 dark:bg-black/25 backdrop-blur-[0.25px]" />
                <div className='relative z-30 mx-auto grid w-full max-w-7xl grid-cols-1 items-center px-4 sm:px-8 lg:pt-24 pt-34 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(220px,380px)] gap-16'>
                    {/* herosection content */}
                    <div className='flex flex-col justify-center lg:items-start items-center lg:text-start text-center'>
                        <SectionBadge text="Available for Work" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                        <h1 className='text-primary sm:text-6xl text-4xl font-bold lg:leading-16 tracking-wide'>Hey, I'm <br /> <span className='bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent underline underline-offset-8'>Isha Makvane</span></h1>
                        <h2 className='dark:text-light text-dark text-2xl mt-4 font-medium tracking-wide'>Web Designer & Developer</h2>
                        <p className='dark:text-white/75 text-dark/75 md:text-lg text-base mt-4 '>Crafting modern, responsive, and visually engaging websites that deliver exceptional user experiences and elevate digital brands.</p>
                        <Button
                            variant="outline"
                            icon={<FaHandshake className="text-lg" />}
                            iconPosition="left"
                            className='mt-4 gap-2'
                        >
                            Hire Me
                        </Button>
                    </div>
                    {/* hero image */}
                    <div className='flex items-center justify-center'>
                        <div className="relative max-h-75 max-w-75 rounded-lg bg-primary backdrop-blur-md shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.5)] lg:mx-0 mx-8" data-primary-bg>
                            <img src={Avatar} alt="avatar" className='origin-bottom h-full w-full relative z-20' />
                            <div className="absolute z-10 top-0 left-0 rounded-lg h-full w-full border border-dashed border-dark/50 dark:border-light/50 bg-transparent -ml-6 -mt-6"></div>
                            <div className="absolute z-0 h-full w-full bg-primary/10 rounded-lg backdrop-blur-sm top-0 left-0 ml-6 mt-6"></div>
                        </div>
                    </div>
                </div>
                {/* scroll down indicator */}
                {/* <MotionLink
                    to="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="hidden md:flex absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-dark/50 dark:text-light/50 hover:text-dark  dark:hover:text-light transition-colors"
                    data-testid="hero-scroll-cue"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        className="grid place-items-center h-8 w-8 rounded-full border border-dark/15 dark:border-light/15 shadow-[0_0_16px_rgba(var(--color-primary-rgb),0.3)]"
                    >
                        <ArrowDown className="h-3.5 w-3.5" />
                    </motion.div>
                </MotionLink> */}
                <div className="relative lg:absolute z-40 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 lg:mb-0 mb-12">
                    <div className="relative w-[30px] h-[50px] border-2 border-primary rounded-full cursor-pointer">

                        {/* animated dot */}
                        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-primary rounded-full animate-scrolldown shadow-[0px_-5px_3px_1px_rgba(var(--color-primary-rgb),0.4)]" />

                        {/* chevrons */}
                        <div className="flex flex-col items-center mt-[48px]">
                            <div className="w-[10px] h-[10px] border-r-2 border-b-2 border-primary rotate-45 animate-pulseFade" />
                            <div className="w-[10px] h-[10px] border-r-2 border-b-2 border-primary rotate-45 animate-pulseFade-delay" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
