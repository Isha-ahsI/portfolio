import React from 'react'
import { SectionBadge } from './ui/SectionBadge'
import { SpotlightCard } from './ui/SpotlightCard'
import { Progress } from "./ui/progress"
import { Data } from '../data/data'


export const Skill = () => {
    return (
        <>
            <section className='relative overflow-hidden max-w-6xl mx-auto pb-24 sm:px-6 sm:pb-28 px-4'>

                {/* section title */}
                <div className=' text-center flex flex-col justify-center items-center mb-12'>
                    <SectionBadge text="Skills" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                    <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary'>Technologies I Work With</h1>
                </div>

                {/* skills card */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {Data.skills.map((item) => (
                        <SpotlightCard borderColor={item.hashcolor} spotlightColor={item.hashcolor} key={item.id}>
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-10 h-10 object-cover"
                                />
                            </div>
                            <h1 className='font-bold text-lg sm:text-xl mt-2 text-dark dark:text-light'>{item.name}</h1>
                            <p className='text-sm mt-0.5 text-dark/75 dark:text-light/75'>{item.category}</p>
                            <Progress value={item.value} color={item.color} className="w-50 mt-3" />
                        </SpotlightCard>
                    ))}
                </div>
            </section>
        </>
    )
}
