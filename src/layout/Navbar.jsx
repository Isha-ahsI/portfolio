import React from 'react'

export const Navbar = () => {
    return (
        <>
            <div className='w-[90%] mx-auto bg-indigo-500 shadow-lg rounded-md my-10 h-24'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-semibold'>My Portfolio</h1>
                    </div>
                    <div className='flex items-center'>
                        <a href="#" className='text-lg font-semibold mx-4'>Home</a>
                        <a href="#" className='text-lg font-semibold mx-4'>About</a>
                        <a href="#" className='text-lg font-semibold mx-4'>Projects</a>
                        <a href="#" className='text-lg font-semibold mx-4'>Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}
