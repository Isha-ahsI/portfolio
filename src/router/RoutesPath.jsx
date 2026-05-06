import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

export const RoutesPath = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}
