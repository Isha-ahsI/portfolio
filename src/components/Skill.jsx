import React from 'react'
import { SectionBadge } from './ui/SectionBadge'
import { SpotlightCard } from './ui/SpotlightCard'


export const Skill = () => {
    return (
        <>
            <section className='relative overflow-hidden max-w-6xl mx-auto py-24 sm:px-6 sm:py-28 px-4'>

                {/* section title */}
                <div className=' text-center flex flex-col justify-center items-center mb-12'>
                    <SectionBadge text="Skills" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                    <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary'>What I Work With</h1>
                </div>

                {/* skills card */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <SpotlightCard borderColor='#facc15' spotlightColor='#facc15'>
                        <h1>Skills</h1>
                    </SpotlightCard>
                </div>
            </section>
        </>
    )
}
