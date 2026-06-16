import React, { useState } from 'react'
import { SectionBadge } from './ui/SectionBadge';
import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogFooter } from "./ui/alert-dialog";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { Data } from '../data/data';



export const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [previewProject, setPreviewProject] = useState(null);
    return (
        <>
            <section id="projects" className='relative max-w-7xl mx-auto pt-24 sm:px-6 sm:pt-28 px-4 min-h-[80vh]'>
                {/* section title */}
                <div className=' text-center flex flex-col justify-center items-center mb-12'>
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "linear" }}>
                        <SectionBadge text="Projects" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                    </motion.div>
                    <motion.h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6, ease: "linear" }}>Things I’ve Built</motion.h1>
                    <motion.p className='dark:text-white/75 text-dark/50 max-w-2xl' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6, ease: "linear" }}>From web applications to innovative tools, these projects represent my journey of learning, experimenting, and creating impactful solutions.</motion.p>
                </div>


                {/* project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {Data.projectCard.map((project) => (
                        <motion.div onClick={() => setSelectedProject(project)} key={project.id} className={`relative w-full h-full overflow-hidden rounded-2xl group/card cursor-pointer`} initial={{
                            opacity: 0,
                            y: 50,
                            scale: 0.5
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: project.id * 0.1,
                            }}>
                            {/* Image */}
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300  group-hover/card:scale-105" />
                            <div className="absolute z-10 bottom-0 transition-all duration-300 ease-linear left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent "></div>
                            <h1 className="absolute z-10 bottom-2 left-4 text-white text-xl font-bold">{project.title}</h1>
                            <Badge className="border-0 flex items-center gap-1 absolute z-10 top-2 right-4 bg-primary text-white"> {project.type} </Badge>

                            {/* Bottom-left connector */}
                            <div className=" absolute bottom-[49px] right-0 w-6 h-6  rounded-br-2xl bg-transparent shadow-[5px_5px_0_5px_white] dark:shadow-[5px_5px_0_5px_rgb(2,6,23)] transition-shadow duration-300 z-20" />

                            {/* Top-right connector */}
                            <div className=" absolute bottom-0 right-[49px] w-6 h-6 rounded-br-2xl bg-transparent shadow-[5px_5px_0_5px_white] dark:shadow-[5px_5px_0_5px_rgb(2,6,23)] transition-shadow duration-300 z-20" />

                            {/* Corner Cutout */}
                            <svg className="absolute -bottom-px -right-px z-10 rounded-tl-2xl" width="50" height="50" viewBox="0 0 90 90">
                                <path d=" M0 0 H90 V90 H0 V50 Q0 0 50 0 Z" className="fill-white dark:fill-slate-950 transition-colors duration-300" />
                            </svg>

                            {/* Button */}
                            <div className="group/view">
                                <button onClick={() => setSelectedProject(project)} className=" absolute bottom-0 right-0 z-20 h-10 w-10 rounded-full bg-dark text-white flex items-center justify-center transition-all duration-300 cursor-pointer">
                                    <FiArrowUpRight className="transition-all duration-300 ease-linear rotate-0 group-hover/view:rotate-45 group-hover/card:rotate-45" />
                                </button>
                            </div>
                        </motion.div>
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
                        className="md:max-w-5xl sm:max-w-2xl max-w-lg border-none bg-transparent shadow-none"
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
