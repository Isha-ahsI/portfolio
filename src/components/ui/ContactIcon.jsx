import React from 'react'
import { Link } from 'react-router-dom'

export const ContactIcon = ({ to, external, icon, className }) => {
    return (
        <>
            <Link to={to} target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined} className={`md:h-10 h-8 md:w-10 w-8 md:rounded-xl rounded-lg grid place-items-center border dark:border-light/15 dark:bg-light/5 backdrop-blur-md dark:text-light/50 border-dark/15 bg-dark/5 text-dark/50 transition-all duration-300 ease-linear hover:border-primary hover:text-light hover:bg-primary hover:-translate-y-[4px] hover:shadow-[0_0_25px_rgba(var(--color-primary-rgb),.5)] ${className}`}>
                {icon}
            </Link>
        </>
    )
}
