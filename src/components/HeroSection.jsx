import React from 'react'
import { Badge } from './ui/badge'
import ShinyText from './ui/ShinyText'
import LightRays from './ui/LightRays'
import { TbCircleDotFilled } from "react-icons/tb";
import Avatar from "../assets/avatar.png"

export const HeroSection = () => {
    return (
        <>
            <section className='relative h-screen w-full overflow-hidden'>
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
                                    className='text-primary'
                                /></Badge>
                            <h1 className='text-primary text-5xl font-bold mb-4'>Hey, I'm Isha Makvane</h1>
                            <p className='text-primary text-4xl font-bold'>- a web designer</p>
                        </div>
                        <div className='md:col-span-5 flex items-center justify-center'>
                            <div className="relative h-75 w-75 rounded-lg bg-primary/25 backdrop-blur-md border border-primary/50 shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.5)] overflow-hidden">
                                <img src={Avatar} alt="avatar" className='origin-bottom' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
