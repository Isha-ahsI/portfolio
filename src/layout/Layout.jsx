import React from 'react'
import { Navbar } from './Navbar'
import {Cursor} from '../components/ui/Cursor'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
    return (
        <>
            <Cursor size={18} />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
