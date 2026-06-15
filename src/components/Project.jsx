import React, { useState } from 'react'
import { SectionBadge } from './ui/SectionBadge';
import { motion } from 'framer-motion';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogFooter } from "./ui/alert-dialog";
import { FiArrowUpRight, FiGithub, FiChevronDown, FiFilter } from "react-icons/fi";
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';
import { Data } from '../data/data';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 1.2,
            staggerChildren: 1,
        },
    },
};

const buttonVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.2,
        },
    }),
};

export const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [previewProject, setPreviewProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = ["All", ...new Set(Data.projectCard.map((item) => item.type))];
    const allSkills = [...new Set(Data.projectCard.flatMap((project) => project.technologies.map((tech) => tech.name)))].sort();

    const filteredProjects = Data.projectCard.filter((project) => {
        const matchesCategory = activeCategory === "All" || project.type === activeCategory;
        const matchesSkills = selectedSkills.length === 0 || selectedSkills.every((skill) => project.technologies.some((tech) => tech.name === skill));
        return matchesCategory && matchesSkills;
    });

    const handleSkillToggle = (skill) => {
        setSelectedSkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };
    return (
        <>
            <section className='relative max-w-7xl mx-auto pt-24 sm:px-6 sm:pt-28 px-4 min-h-[80vh]'>
                {/* section title */}
                <div className=' text-center flex flex-col justify-center items-center mb-12'>
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}>
                        <SectionBadge text="Projects" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                    </motion.div>
                    <motion.h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6, ease: "linear" }}>Things I’ve Built</motion.h1>
                    <motion.p className='dark:text-white/75 text-dark/50 max-w-2xl' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.6, ease: "linear" }}>From web applications to innovative tools, these projects represent my journey of learning, experimenting, and creating impactful solutions.</motion.p>
                </div>

                {/* Filters */}
                <motion.div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mb-12 relative z-30" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}>
                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {categories.map((category, index) => (
                            <motion.button
                                key={index}
                                custom={index}
                                variants={buttonVariants}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-primary text-white border-primary shadow-[0_0_8px_0_rgba(var(--color-primary-rgb),.5)]'
                                    : 'bg-transparent text-dark dark:text-white border-dark/15 dark:border-white/10 hover:border-primary hover:text-primary dark:hover:text-primary dark:hover:border-primary'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>

                    {/* Skill Filter Dropdown */}
                    <motion.div className="relative"  custom={categories.length}
  variants={buttonVariants}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border bg-transparent text-dark dark:text-white border-dark/15 dark:border-white/10 hover:border-primary hover:text-primary dark:hover:text-primary dark:hover:border-primary"
                        >
                            <FiFilter /> Technology {selectedSkills.length > 0 && <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">{selectedSkills.length}</span>}
                            <FiChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 w-56 bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-dark/10 dark:border-white/10 rounded-2xl shadow-xl z-50 overflow-hidden py-3 pr-1 pl-3">
                                    <div className="max-h-64 overflow-y-auto custom-scrollbar pr-2 flex flex-col gap-1">
                                        {allSkills.map((skill) => (
                                            <label key={skill} className="flex items-center gap-3 px-2 py-1.5 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors group">
                                                <div className="relative flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedSkills.includes(skill)}
                                                        onChange={() => handleSkillToggle(skill)}
                                                        className="peer absolute opacity-0 w-full h-full cursor-pointer"
                                                    />
                                                    <div className="w-4 h-4 rounded border border-dark/30 dark:border-white/30 bg-white dark:bg-slate-800 peer-checked:bg-primary peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/50 transition-all flex items-center justify-center">
                                                        <svg className={`w-3 h-3 text-white transition-transform duration-200 ${selectedSkills.includes(skill) ? 'scale-100' : 'scale-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                                    </div>
                                                </div>
                                                <span className="text-sm text-dark dark:text-white/90 group-hover:text-primary dark:group-hover:text-primary transition-colors">{skill}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </motion.div>

                {/* project cards */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        {filteredProjects.map((project) => (
                            <motion.div onClick={() => setSelectedProject(project)} key={project.id} className={`relative w-full h-full overflow-hidden rounded-2xl group/card cursor-pointer`} whileHover={{ scale: 1.05 }}>
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
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-20 h-20 mb-4 rounded-full bg-dark/5 dark:bg-white/5 flex items-center justify-center">
                            <FiFilter className="w-10 h-10 text-dark/20 dark:text-white/20" />
                        </div>
                        <h3 className="text-xl font-bold text-dark dark:text-white mb-2">No projects found</h3>
                        <p className="text-dark/50 dark:text-white/50 max-w-md">
                            We couldn't find any projects matching your selected technologies and categories. Try adjusting your filters.
                        </p>
                        <button
                            onClick={() => { setActiveCategory("All"); setSelectedSkills([]); }}
                            className="mt-6 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 cursor-pointer"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

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
