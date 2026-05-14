import React from 'react'
import { SectionBadge } from './ui/SectionBadge';

export const Project = () => {
    return (
        <>
            <section className='relative overflow-hidden'>
                <div className='max-w-6xl mx-auto py-24 sm:px-6 sm:py-28 px-4'>
                    <SectionBadge text="Projects" />
                </div>
            </section>
        </>
    )
}
