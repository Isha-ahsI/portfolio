import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { About } from '../components/About'
import { Project } from '../components/Project'
import { Skill } from '@/components/Skill'


export const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Project />
            <Skill />
        </>
    )
}
