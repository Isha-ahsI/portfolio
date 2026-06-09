import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { About } from '../components/About'
import { Project } from '../components/Project'
import { Skill } from '../components/Skill'
import { ContactUs } from '../components/ContactUs'


export const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Project />
            <Skill />
            <ContactUs />
        </>
    )
}
