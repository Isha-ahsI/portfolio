import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { About } from '../components/About'
import { Project } from '../components/Project'


export const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Project />
        </>
    )
}
