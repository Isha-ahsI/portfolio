import React from 'react';
import { SectionBadge } from './ui/SectionBadge';
import { Badge } from './ui/badge';
import { Data } from '../data/data';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

export const Experience = () => {
    return (
        <section id="experience" className='relative max-w-6xl mx-auto pt-24 sm:px-6 sm:pt-28 px-4 overflow-hidden'>
            {/* Section Title */}
            <div className='text-center flex flex-col justify-center items-center mb-16 md:mb-24'>
                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "linear" }}>
                    <SectionBadge text="Experience" bgColor="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary" />
                </motion.div>
                <motion.h1 className='font-bold text-2xl sm:text-4xl mb-2 text-primary' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6, ease: "linear" }}>My Work Journey</motion.h1>
                <motion.p className='dark:text-white/75 text-dark/50 max-w-2xl' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6, ease: "linear" }}>A timeline of my professional experience and the roles where I've grown my skills and delivered impact.</motion.p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-[-100px] bottom-[-100px] w-0.5 bg-gradient-to-b from-transparent via-dark/20 to-transparent dark:via-white/20 rounded-full"></div>

                {Data.experience.map((exp, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-20 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Empty space for desktop alternating layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Timeline Node */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-950 border-[4px] border-white dark:border-slate-950 shadow-[0_0_0_2px_rgba(var(--color-primary-rgb),0.2)] z-10">
                                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)]">
                                    <FiBriefcase className="w-3 h-3 md:w-5 md:h-5" />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full pl-12 md:pl-0 md:w-5/12">
                                <div className={`bg-white dark:bg-slate-900 border border-dark/5 dark:border-white/5 p-6 sm:p-8 rounded-[2rem] shadow-[0_8px_30px_rgba(var(--color-primary-rgb),0.08)] hover:shadow-[0_8px_30px_rgba(var(--color-primary-rgb),0.25)] dark:shadow-[0_8px_30px_rgba(var(--color-primary-rgb),0.03)] dark:hover:shadow-[0_8px_30px_rgba(var(--color-primary-rgb),0.2)] transition-all duration-300 group hover:-translate-y-1 hover:border-primary/30 relative overflow-hidden`}>

                                    {/* Subtle gradient blob on hover */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                    {exp.roles ? (
                                        <>
                                            <div className="flex flex-col gap-1 mb-6 relative z-10 border-b border-dark/10 dark:border-white/10 pb-5">
                                                <h3 className="text-xl sm:text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">{exp.company}</h3>
                                                <Badge className="border-0 bg-primary/10 text-primary hover:bg-primary/20 w-fit mt-2 whitespace-nowrap">
                                                    {exp.duration}
                                                </Badge>
                                            </div>
                                            <div className="relative z-10 flex flex-col gap-6">
                                                {exp.roles.map((role, idx) => (
                                                    <div key={idx} className="flex flex-col gap-2 relative">
                                                        {/* Optional tiny line connecting roles */}
                                                        {idx !== exp.roles.length - 1 && <div className="absolute left-[5px] top-6 bottom-[-24px] w-px bg-dark/10 dark:bg-white/10"></div>}

                                                        <div className="flex items-start gap-4">
                                                            <div className="mt-1.5 w-3 h-3 rounded-full bg-primary/50 border-[2px] border-white dark:border-slate-900 z-10 shrink-0"></div>
                                                            <div className="flex flex-col w-full">
                                                                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1 xl:gap-2 mb-2 w-full">
                                                                    <h4 className="text-base sm:text-lg font-bold text-dark dark:text-white/90">{role.title}</h4>
                                                                    <Badge variant="secondary" className="border-0 bg-dark/5 dark:bg-white/5 text-dark/60 dark:text-white/60 hover:bg-dark/10 dark:hover:bg-white/10 w-fit whitespace-nowrap">
                                                                        {role.duration}
                                                                    </Badge>
                                                                </div>
                                                                <p className="text-dark/70 dark:text-white/70 leading-relaxed text-sm">
                                                                    {role.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex flex-col gap-1 mb-4 relative z-10">
                                                <Badge className="border-0 bg-primary/10 text-primary hover:bg-primary/20 w-fit mb-2 whitespace-nowrap">
                                                    {exp.duration}
                                                </Badge>
                                                <h3 className="text-xl sm:text-2xl font-bold text-dark dark:text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                                                <h4 className="text-base font-medium text-dark/50 dark:text-white/50">{exp.company}</h4>
                                            </div>
                                            <p className="text-dark/70 dark:text-white/70 leading-relaxed text-sm sm:text-base relative z-10">
                                                {exp.description}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
