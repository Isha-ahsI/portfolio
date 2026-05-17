import React from 'react'
import { SectionBadge } from './ui/SectionBadge';

export const Project = () => {
    return (
        <>
            <section className='relative overflow-hidden'>
                <div className='max-w-6xl mx-auto py-24 sm:px-6 sm:py-28 px-4 text-center flex flex-col justify-center items-center'>
                    <SectionBadge text="Projects" />
                    <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary'>Things I’ve Built</h1>
                    <p className='dark:text-white/75 text-dark/50 max-w-2xl'>From web applications to innovative tools, these projects represent my journey of learning, experimenting, and creating impactful solutions.</p>
                </div>
            </section>
        </>
    )
}
