import React from 'react'
import { Badge } from './ui/badge'
import ShinyText from './ui/ShinyText'
import LightRays from './ui/LightRays'
import { TbCircleDotFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import Avatar from "../assets/avatar.png"

export const HeroSection = () => {
    return (
        <>
            <section className='relative z-10 h-screen w-full overflow-hidden'>
                <div className="absolute inset-0 z-0">
                    <LightRays
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
                    />
                </div>
                <div className='relative z-10 h-full'>
                    <div className='md:grid md:grid-cols-12 items-center h-full'>
                        <div className='md:col-span-7 flex flex-col justify-center mx-auto'>
                            <Badge variant="primary" className="rounded-full bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary font-medium text-sm p-4 capitalize mb-4 shadow-[0_0_16px_rgba(var(--color-primary-rgb),0.35)]"> <TbCircleDotFilled className='me-1' />
                                <ShinyText
                                    text="Available for Work"
                                    disabled={false}
                                    speed={3}
                                /></Badge>
                            <h1 className='text-primary text-6xl font-bold leading-[65px]'>Hey, I'm <br /> <span className='bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent underline underline-offset-8'>Isha Makvane</span></h1>
                            <p className='text-light text-2xl  mt-4'>Web Designer</p>
                            <p className='text-primary-100 text-lg mt-4'>Crafting modern, responsive, and visually engaging websites that deliver exceptional user experiences and elevate digital brands.</p>
                            <button
                                className="
        relative overflow-hidden cursor-pointer
        flex items-center gap-2
        px-8 py-3
        w-fit mt-4
        rounded-[0.6em]
        border-2 border-primary
        text-primary
        text-[15px]
        tracking-[0.06em]
        font-medium
        leading-[1.4em]
        transition-all duration-300
        shadow-[inset_0_0_10px_rgba(var(--color-primary-rgb),0.4),0_0_9px_3px_rgba(var(--color-primary-rgb),0.1)]
        bg-[linear-gradient(to_right,rgba(var(--color-primary-rgb),0.1)_1%,transparent_40%,transparent_60%,rgba(var(--color-primary-rgb),0.1)_100%)]

        hover:text-primary-dark
        hover:shadow-[inset_0_0_10px_rgba(var(--color-primary-rgb),0.6),0_0_9px_3px_rgba(var(--color-primary-rgb),0.2)]
        hover:scale-90

        before:content-['']
        before:absolute
        before:top-0
        before:left-[-4em]
        before:w-[4em]
        before:h-full
        before:bg-[linear-gradient(to_right,transparent_1%,rgba(var(--color-primary-rgb),0.1)_40%,rgba(var(--color-primary-rgb),0.1)_60%,transparent_100%)]
        before:transition-transform
        before:duration-500
        before:ease-in-out

        hover:before:translate-x-[15em]
      "
                            >
                                <FaHandshake className='text-lg' /> Hire Me
                            </button>                       </div>
                        <div className='md:col-span-5 flex items-center justify-center'>
                            <div className="relative h-75 w-75 rounded-lg bg-primary backdrop-blur-md shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.5)]">
                                <img src={Avatar} alt="avatar" className='origin-bottom relative z-20' />
                                <div className="absolute z-10 top-0 left-0 rounded-lg h-full w-full border border-dashed border-dark/25 dark:border-light/25 bg-transparent -ml-6 -mt-6"></div>
                                <div className="absolute z-0 h-full w-full bg-primary/10 rounded-lg backdrop-blur-sm top-0 left-0 ml-6 mt-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
