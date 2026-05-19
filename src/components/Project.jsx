import React from 'react'
// import BorderGlow from './ui/BorderGlow';
import { SectionBadge } from './ui/SectionBadge';
import { FiArrowUpRight, FiGithub, FiEye } from "react-icons/fi";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { Data } from '../data/data';

export const Project = () => {
    return (
        <>
            <section className='relative overflow-hidden max-w-6xl mx-auto py-24 sm:px-6 sm:py-28 px-4'>
                <div className=' text-center flex flex-col justify-center items-center mb-20'>
                    <SectionBadge text="Projects" />
                    <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary'>Things I’ve Built</h1>
                    <p className='dark:text-white/75 text-dark/50 max-w-2xl'>From web applications to innovative tools, these projects represent my journey of learning, experimenting, and creating impactful solutions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {Data.projectCard.map((project) => (
                        <Card key={project.id} className="relative w-full md:max-w-md pt-0 h-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="relative z-20 w-full h-full object-cover"
                            />
                            <CardHeader>
                                <CardAction>
                                    <Badge>{project.type}</Badge>
                                </CardAction>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <div className="flex gap-4 items-center">
                                    <Link to={project.live} className="relative group text-base inline-flex items-center gap-1 font-medium text-dark/50 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
                                        <span>See Details</span>
                                        <FiArrowUpRight className="text-[16px] transition-all duration-400 rotate-[-45deg] group-hover:rotate-0 group-hover:text-primary" />
                                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover:w-full" />
                                    </Link>
                                    <Link to={project.github} className="relative group text-base inline-flex items-center gap-1 font-medium text-dark/50 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
                                        <span>GitHub</span>
                                        <FiGithub className="text-[16px] transition-all duration-400 group-hover:text-primary" />
                                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover:w-full" />
                                    </Link>
                                    <Link to={project.live} className="relative group text-base inline-flex items-center gap-1 font-medium text-dark/50 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
                                        <span>Live</span>
                                        <FiEye className="text-[16px] transition-all duration-400 group-hover:text-primary" />
                                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover:w-full" />
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}
