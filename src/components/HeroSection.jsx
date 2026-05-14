import React from 'react'
// import { Badge } from './ui/badge'
// import ShinyText from './ui/ShinyText'
import Button from './ui/Button'
import { Link } from 'react-router-dom'
import GradientBlobs from './ui/GradientBlobs'
// import LightRays from './ui/LightRays'
// import { TbCircleDotFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import Avatar from "../assets/avatar.png"
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { SectionBadge } from './ui/SectionBadge';

const MotionLink = motion(Link);
export const HeroSection = () => {
    return (
        <>
            <section className='relative flex min-h-[100svh] items-center justify-center overflow-hidden'>
                <div className="absolute inset-0 z-0">
                    <GradientBlobs />
                    {/* <LightRays
                        raysOrigin="top-center"
                        raysColor="#6366f1"
                        raysSpeed={1}
                        lightSpread={1}
                        rayLength={2}
                        pulsating={true}
                        fadeDistance={1.0}
                        saturation={1.0}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.0}
                        distortion={0.0}
                        className="w-full"
                    /> */}
                </div>
                <div className="absolute inset-0 h-full w-full z-10 bg-white/15 dark:bg-black/25 blur-lg" />
                <div className='relative z-20 mx-auto grid w-full max-w-6xl grid-cols-1 items-center px-4 sm:px-8 lg:pt-40 pt-46 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(220px,380px)] gap-16'>
                    {/* herosection content */}
                    <div className='flex flex-col justify-center lg:items-start items-center lg:text-start text-center'>
                        {/* <Badge variant="primary" className="rounded-full bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary font-medium text-sm p-4 capitalize mb-4 shadow-[0_0_16px_rgba(var(--color-primary-rgb),0.35)]"> <TbCircleDotFilled className='me-1' />
                            <ShinyText
                                text="Available for Work"
                                disabled={false}
                                speed={3}
                            /></Badge> */}

                        <SectionBadge text="Available for Work" />
                        <h1 className='text-primary sm:text-6xl text-4xl font-bold lg:leading-16 tracking-wide'>Hey, I'm <br /> <span className='bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent underline underline-offset-8'>Isha Makvane</span></h1>
                        <h2 className='dark:text-light text-dark text-2xl mt-4 font-medium tracking-wide'>Web Designer</h2>
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
                        <div className="relative max-h-75 max-w-75 rounded-lg bg-primary backdrop-blur-md shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.5)] lg:mx-0 mx-8">
                            <img src={Avatar} alt="avatar" className='origin-bottom h-full w-full relative z-20' />
                            <div className="absolute z-10 top-0 left-0 rounded-lg h-full w-full border border-dashed border-dark/50 dark:border-light/50 bg-transparent -ml-6 -mt-6"></div>
                            <div className="absolute z-0 h-full w-full bg-primary/10 rounded-lg backdrop-blur-sm top-0 left-0 ml-6 mt-6"></div>
                        </div>
                    </div>
                </div>
                {/* scroll down indicator */}
                <MotionLink
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
                </MotionLink>

            </section>
        </>
    )
}
