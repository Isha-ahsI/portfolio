import React from 'react'
import { Navbar } from './Navbar'
import { ParticleBg } from '../components/ui/ParticleBg'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <>
            <ParticleBg />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
