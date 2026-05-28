import React, { useState } from 'react'
// import BorderGlow from './ui/BorderGlow';
import { SectionBadge } from './ui/SectionBadge';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogDescription } from "./ui/alert-dialog";
import { FiArrowUpRight, FiGithub, FiEye, FiX } from "react-icons/fi";
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
    const [selectedProject, setSelectedProject] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);
    return (
        <>
            <section className='relative overflow-hidden max-w-6xl mx-auto py-24 sm:px-6 sm:py-28 px-4'>
                {/* section title */}
                <div className=' text-center flex flex-col justify-center items-center mb-20'>
                    <SectionBadge text="Projects" />
                    <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary'>Things I’ve Built</h1>
                    <p className='dark:text-white/75 text-dark/50 max-w-2xl'>From web applications to innovative tools, these projects represent my journey of learning, experimenting, and creating impactful solutions.</p>
                </div>

                {/* project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {Data.projectCard.map((project) => (
                        <Card key={project.id} className="relative w-full md:max-w-md pt-0 h-full overflow-hidden group/card">
                            <div className="relative overflow-hidden z-20 w-full h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-10 w-full h-full object-cover group-hover/card:scale-105 transition-all duration-300 ease-in"
                                />
                                <Link onClick={() => setPreviewOpen(true)} className="absolute z-30 top-0 mt-2 me-2 flex items-center justify-center flex-col right-0 w-8 h-8 rounded-lg bg-light/50 border border-light/15 hover:border-primary backdrop-blur-sm hover:bg-primary text-dark group/view opacity-0 scale-0 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300 ease-linear hover:text-light">
                                    <FiArrowUpRight className='transition-all duration-300 ease-linear rotate-0 group-hover/view:rotate-[45deg]' />
                                </Link>
                                <div className="absolute z-20 -bottom-24 opacity-0 group-hover/card:opacity-100 group-hover/card:bottom-0 transition-all duration-300 ease-linear left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent "></div>
                                <div className="absolute z-30 -bottom-16 ms-3 mb-2 left-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300 ease-linear group-hover/card:bottom-0">
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
                                    <Link onClick={() => setSelectedProject(project)} className="relative group/details text-base inline-flex items-center gap-1 font-medium text-dark/75 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
                                        <span>See Details</span>
                                        <FiArrowUpRight className="text-[16px] transition-all duration-400 rotate-[-45deg] group-hover/details:rotate-0 group-hover/details:text-primary" />
                                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover/details:w-full" />
                                    </Link>
                                    <Link to={project.github}  target="_blank" rel="noopener noreferrer" className="relative group/github text-base inline-flex items-center gap-1 font-medium text-dark/75 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
                                        <span>GitHub</span>
                                        <FiGithub className="text-[16px] transition-all duration-400 group-hover/github:text-primary" />
                                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover/github:w-full" />
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* custom dialog more details*/}
                <AlertDialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
                    <AlertDialogContent className="p-4 sm:p-5 overflow-visible sm:max-w-lg max-w-md w-[calc(100%-2rem)] sm:w-full bg-white dark:bg-[#12121a] border border-dark/10 dark:border-white/10 rounded-[1.5rem] shadow-2xl">
                        {selectedProject && (
                            <>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute -top-4 right-0 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#1e1e28] border border-dark/10 dark:border-white/10 text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-[#2a2a35] hover:text-primary dark:hover:text-primary transition-all duration-100 ease-in-out shadow-sm hover:ring-1 hover:ring-primary/25 group/close-btn cursor-pointer"
                                >
                                    <FiX size={16} className="transition-all duration-100 ease-linear group-hover/close-btn:rotate-90 group-hover/close-btn:text-primary" />
                                </button>

                                <div className="flex flex-col w-full">
                                    <div className="w-full mb-5">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover rounded-2xl shadow-sm"
                                        />
                                    </div>

                                    <div className="flex flex-col text-left px-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <AlertDialogTitle className="text-2xl font-bold text-primary">
                                                {selectedProject.title}
                                            </AlertDialogTitle>
                                            <Badge className="border-0 flex items-center gap-1">
                                                {selectedProject.type}
                                            </Badge>
                                        </div>

                                        <AlertDialogDescription className="text-[14px] leading-relaxed text-dark/70 dark:text-white/70 mb-4">
                                            {selectedProject.description}
                                        </AlertDialogDescription>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.technologies.map((tech, index) => {
                                                const Icon = tech.icon;

                                                return (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="flex items-center gap-1 bg-dark/10 dark:bg-white/25 text-dark dark:text-white border border-dark/25 dark:border-white/25"
                                                    >
                                                        <Icon className={tech.color} />
                                                        {tech.name}
                                                    </Badge>
                                                );
                                            })}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3 w-full mt-1">
                                            <Link
                                                to={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 w-full inline-flex items-center justify-center gap-1 rounded-lg text-base font-medium py-2 px-4 bg-white text-black border border-black transition-colors hover:bg-gray-100 dark:border dark:border-white"
                                            >
                                                <FiGithub size={18} /> GitHub
                                            </Link>
                                            <Link
                                                onClick={() => setPreviewOpen(true)}
                                                className="flex-1 w-full inline-flex items-center justify-center gap-1 rounded-lg text-base font-medium py-2 px-4 bg-primary text-white transition-colors hover:bg-primary/90 group/live"
                                            >
                                                Live demo <FiArrowUpRight size={18} className="transition-all duration-150 ease-linear group-hover/live:rotate-45" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </AlertDialogContent>
                </AlertDialog>

                {/* custom dialog live project*/}
                <AlertDialog  open={previewOpen} onOpenChange={setPreviewOpen}>
                    <AlertDialogContent className="p-0 overflow-hidden w-full h-full max-w-4xl">
                    {/* <AlertDialogTrigger asChild>
                        <button className="hidden">Open Live Project</button>
                    </AlertDialogTrigger> */}
                        <iframe
                            src={selectedProject ? selectedProject.live : ''}
                            title={selectedProject ? selectedProject.title : 'Live Project'}
                            className="w-full h-[75vh] border-0 rounded-xl"
                        />
                    </AlertDialogContent>
                </AlertDialog>
            </section>
        </>
    )
}
