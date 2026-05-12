import React from 'react'
import { Navbar } from './Navbar'
import { ParticleBg } from '../components/ui/ParticleBg'

export const Layout = ({ children }) => {
    return (
        <>
            <div className='container mx-auto'>
                <ParticleBg />
                <Navbar />
                {children}
            </div>
        </>
    )
}
