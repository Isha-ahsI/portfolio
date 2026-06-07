import React, { useState } from 'react'
// import BorderGlow from './ui/BorderGlow';
import { SectionBadge } from './ui/SectionBadge';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogDescription, AlertDialogCancel, AlertDialogFooter } from "./ui/alert-dialog";
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
    const [previewProject, setPreviewProject] = useState(null);
    return (
        <>
            <section className='relative overflow-hidden max-w-6xl mx-auto py-24 sm:px-6 sm:py-28 px-4'>
                {/* section title */}
                <div className=' text-center flex flex-col justify-center items-center mb-12'>
                    <SectionBadge text="Projects" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                    <h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary'>Things I’ve Built</h1>
                    <p className='dark:text-white/75 text-dark/50 max-w-2xl'>From web applications to innovative tools, these projects represent my journey of learning, experimenting, and creating impactful solutions.</p>
                </div>

                {/* project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {Data.projectCard.map((project) => (
                        <Card key={project.id} className="relative w-full md:max-w-md pt-0 h-full overflow-hidden group/card transition-all duration-300 ease-in">
                            <div className="relative overflow-hidden z-20 w-full h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="relative z-10 w-full h-full object-cover group-hover/card:scale-105 transition-all duration-300 ease-in"
                                />
                                <button onClick={() => setPreviewProject(project)} className="absolute z-30 top-0 mt-2 me-2 flex items-center justify-center flex-col right-0 w-8 h-8 rounded-lg bg-light/50 border border-light/15 hover:border-primary backdrop-blur-sm hover:bg-primary text-dark group/view opacity-0 scale-0 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-300 ease-linear hover:text-light cursor-pointer">
                                    <FiArrowUpRight className='transition-all duration-300 ease-linear rotate-0 group-hover/view:rotate-[45deg]' />
                                </button>
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
                                    <button onClick={() => setSelectedProject(project)} className="relative group/details text-base inline-flex items-center gap-1 font-medium text-dark/75 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide cursor-pointer">
                                        <span>See Details</span>
                                        <FiArrowUpRight className="text-[16px] transition-all duration-400 rotate-[-45deg] group-hover/details:rotate-0 group-hover/details:text-primary" />
                                        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary dark:bg-primary transition-all duration-500 group-hover/details:w-full" />
                                    </button>
                                    <Link to={project.github} target="_blank" rel="noopener noreferrer" className="relative group/github text-base inline-flex items-center gap-1 font-medium text-dark/75 dark:text-light/75 transition-all duration-300 hover:text-primary hover:tracking-wide">
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
                    <AlertDialogContent className="p-4 sm:p-5 overflow-visible md:max-w-2xl sm:max-w-xl max-w-lg w-[calc(100%-2rem)] sm:w-full bg-white/25 dark:bg-white/15 backdrop-blur-2xl border border-white/15 rounded-[1.5rem] shadow-2xl">
                        {selectedProject && (
                            <>
                                {/* <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute -top-4 right-0 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#1e1e28] border border-dark/10 dark:border-white/10 text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-[#2a2a35] hover:text-primary dark:hover:text-primary transition-all duration-100 ease-in-out shadow-sm hover:ring-1 hover:ring-primary/25 group/close-btn cursor-pointer"
                                >
                                    <FiX size={16} className="transition-all duration-100 ease-linear group-hover/close-btn:rotate-90 group-hover/close-btn:text-primary" />
                                </button> */}
                                <div className="absolute -top-4 right-0 z-50">
                                    <AlertDialogCancel />
                                </div>

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
                                            <AlertDialogTitle className="text-2xl font-bold dark:text-primary text-dark">
                                                {selectedProject.title}
                                            </AlertDialogTitle>
                                            <Badge className="border-0 flex items-center gap-1 bg-primary text-white">
                                                {selectedProject.type}
                                            </Badge>
                                        </div>

                                        <AlertDialogDescription className="text-[14px] leading-relaxed text-white/75 mb-4">
                                            {selectedProject.description}
                                        </AlertDialogDescription>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.technologies.map((tech, index) => {
                                                const Icon = tech.icon;

                                                return (
                                                    <Badge
                                                        key={index}
                                                        variant="secondary"
                                                        className="flex items-center gap-1 bg-white/25 text-dark dark:text-white border border-white/25"
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
                                                className="flex-1 w-full inline-flex items-center justify-center gap-1 rounded-lg text-base font-medium py-2 px-4 bg-white text-black border border-white transition-all duration-300 ease-linear hover:bg-gray-100 dark:border dark:border-white hover:scale-95 shadow-[0px_0px_8px_0_rgba(255,255,255,.25)]
    hover:shadow-[0px_0px_16px_0_rgba(255,255,255,.5)]"
                                            >
                                                <FiGithub size={18} /> GitHub
                                            </Link>
                                            <button
                                                onClick={() => { setPreviewProject(selectedProject); setSelectedProject(null); }}
                                                className="flex-1 w-full inline-flex items-center justify-center gap-1 rounded-lg text-base font-medium py-2 px-4 bg-gradient-to-b from-primary-500 to-primary-600 text-white transition-all duration-300 ease-linear hover:bg-primary/90 group/live cursor-pointer hover:scale-95 shadow-[0px_0px_8px_0_rgba(var(--color-primary-rgb),.25)] hover:shadow-[0px_0px_16px_0_rgba(var(--color-primary-rgb),.75)]"
                                            >
                                                Live demo <FiArrowUpRight size={18} className="transition-all duration-150 ease-linear group-hover/live:rotate-45" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </AlertDialogContent>
                </AlertDialog>

                {/* Live Demo Modal */}
                <AlertDialog
                    open={!!previewProject}
                    onOpenChange={(open) => !open && setPreviewProject(null)}
                    className="bg-transparent"
                >
                    <AlertDialogContent
                        className="md:max-w-4xl sm:max-w-2xl max-w-lg border-none bg-transparent shadow-none"
                    >
                        <AlertDialogHeader className="flex flex-row items-center justify-between px-1">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wider text-primary-300">
                                    Live Demo
                                </p>

                                <AlertDialogTitle className="text-lg font-semibold text-white">
                                    {previewProject?.title}
                                </AlertDialogTitle>

                                <AlertDialogDescription className="sr-only">
                                    Live preview of {previewProject?.title}
                                </AlertDialogDescription>
                            </div>

                            <div className="flex items-center gap-2">
                                <Link
                                    to={previewProject?.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/75 hover:border-white/50 hover:bg-white/10 hover:text-white transition-all duration-150 ease-linear hover:scale-95  before:content-[''] before:absolute before:top-0 before:left-[-4em] before:w-[4em] before:h-full before:bg-[linear-gradient(to_right,transparent_1%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0.1)_60%,transparent_100%)] before:transition-transform before:duration-500 before:ease-in-out hover:before:translate-x-[15em]"
                                >
                                    Open in new tab
                                </Link>

                                <AlertDialogCancel />
                            </div>
                        </AlertDialogHeader>

                        <div className="flex min-h-0 flex-1 justify-center overflow-hidden">
                            <div className="flex w-full max-w-[1200px] flex-col rounded-[1.75rem] border-[10px] border-transparent bg-slate-950 overflow-hidden">

                                <div className="flex h-7 items-center gap-1.5 border-b border-white/5 bg-slate-800/90 px-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                                    <span className="ml-2 truncate text-[10px] text-slate-500">
                                        {previewProject?.live}
                                    </span>
                                </div>

                                <div className="relative h-[76vh] w-full bg-slate-950">
                                    <iframe
                                        src={previewProject?.live}
                                        title={previewProject?.title}
                                        className="absolute inset-0 h-full w-full border-0"
                                    />
                                </div>
                            </div>
                        </div>

                        <AlertDialogFooter className="border-0 bg-transparent p-0">
                            <p className="w-full text-center text-[11px] text-dark/50 dark:text-white/50">
                                Preview is tablet-sized and up. On smaller screens, Live opens the
                                site in a new tab.
                            </p>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </section>
        </>
    )
}
