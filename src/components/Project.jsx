import React from 'react'
// import BorderGlow from './ui/BorderGlow';
import { SectionBadge } from './ui/SectionBadge';
import { FiArrowUpRight, FiGithub, FiEye } from "react-icons/fi";
// import {
//     FaHtml5,
//     FaCss3Alt,
//     FaJs,
//     FaReact,
//     FaGithub,
// } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
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
                        <Card key={project.id} className="relative w-full md:max-w-md pt-0 h-full overflow-hidden group/card">
                            <div className="relative overflow-hidden z-20 w-full h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-10 w-full h-full object-cover group-hover/card:scale-105 transition-all duration-300 ease-in"
                                />
                                <Link to={project.live} className="absolute z-30 top-0 mt-2 me-2 flex items-center justify-center flex-col right-0 w-8 h-8 rounded-lg bg-light/50 border border-light/15 hover:border-primary backdrop-blur-sm hover:bg-primary text-dark group/view opacity-0 scale-0 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300 ease-linear hover:text-light">
                                    <FiArrowUpRight className='transition-all duration-300 ease-linear rotate-0 group-hover/view:rotate-[45deg]' />
                                </Link>
                                <div className="absolute z-20 bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute z-30 bottom-0 ms-3 mb-2 left-0">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => {
                                            const Icon = tech.icon;

                                            return (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="flex items-center gap-1"
                                                >
                                                    <Icon className={tech.color} />
                                                    {tech.name}
                                                </Badge>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardAction>
                                        <Badge className="border-0 flex items-center gap-1">
                                            {project.type}
                                        </Badge>
                                    </CardAction>
                                </div>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <Link to={project.live} className="relative group/details text-base inline-flex items-center gap-1 font-medium text-dark/50 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
                                        <span>See Details</span>
                                        <FiArrowUpRight className="text-[16px] transition-all duration-400 rotate-[-45deg] group-hover/details:rotate-0 group-hover/details:text-primary" />
                                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover/details:w-full" />
                                    </Link>
                                    <Link to={project.github} className="relative group/github text-base inline-flex items-center gap-1 font-medium text-dark/50 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
                                        <span>GitHub</span>
                                        <FiGithub className="text-[16px] transition-all duration-400 group-hover/github:text-primary" />
                                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover/github:w-full" />
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
