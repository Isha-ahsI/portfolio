import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { About } from '../components/About'
import { Project } from '../components/Project'
import { Skill } from '../components/Skill'
import { ContactUs } from '../components/ContactUs'
import { Experience } from '../components/Experience'


export const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Project />
            <Experience />
            <Skill />
            <ContactUs />
        </>
    )
}
