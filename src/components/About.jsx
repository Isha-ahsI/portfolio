import React, { useRef } from 'react';
import { SectionBadge } from './ui/SectionBadge';
import Button from './ui/Button';
import { useCountUp } from 'use-count-up';
import { Data } from '../data/data';
import { motion, useInView } from 'framer-motion';
import { useCopyEmail } from "../hooks/useCopyEmail";
import { FaEnvelope } from "react-icons/fa";
import FullAvatar from '../assets/full-avatar.png';

const isDesktop = window.matchMedia("(min-width: 768px)").matches;

const cardVariants = isDesktop
    ? {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "linear",
                staggerChildren: 0.15,
                delayChildren: 0.6,
            },
        },
    }
    : {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.15,
                delayChildren: 0.6,
            },
        },
    };

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


export const About = () => {

    const statsRef = useRef(null);

    const isVisible = useInView(statsRef, {
        once: true,
        amount: 0.5,
    });

    const { copied, copyEmail } = useCopyEmail();


    return (
        <section id="about" className="relative overflow-hidden max-w-7xl mx-auto pt-24 sm:px-6 sm:pt-28 px-4">

            {/* Grid Layout */}
            <div className="max-w-6xl mx-auto relative flex md:flex-row items-center md:justify-between justify-center">

                {/* PNG Image */}
                <motion.div className="relative z-20 h-[400px] md:block hidden" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}>
                    <motion.img
                        src={FullAvatar}
                        alt="Isha Makvane"
                        className="w-full h-full object-cover"
                        animate={{
                            scale: [1, 1.05, 1],
                            filter: [
                                "drop-shadow(0 8px 16px rgba(var(--color-primary-rgb), 0.5))",
                                "drop-shadow(0 14px 28px rgba(var(--color-primary-rgb), 0.75))",
                                "drop-shadow(0 8px 16px rgba(var(--color-primary-rgb), 0.5))",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Content Card */}
                <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="md:z-10 md:absolute md:start-70 rounded-2xl md:pl-16 md:pr-8 md:px-10 p-8 border border-dark/20 dark:border-white/20 bg-primary backdrop-blur-md shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.2)] md:text-start text-center"
                    data-primary-bg>
                    <motion.div variants={childVariants}>
                        <SectionBadge text="About Me" bgColor="bg-white/25 border border-white/25 backdrop-blur-2xl text-primary" className="text-white" color="#000000" shineColor="#ffffff" />
                    </motion.div>
                    <motion.h2 variants={childVariants} className="font-[900] text-2xl sm:text-4xl uppercase tracking-wider text-white mb-2">
                        Get To Know Me!
                    </motion.h2>
                    <motion.div variants={childVariants} className="md:hidden flex justify-center mb-6">
                        <img
                            src={FullAvatar}
                            alt="Isha Makvane"
                            className="max-h-[400px] drop-shadow-[0_8px_16px_rgba(255,255,255,0.5)]"
                        />
                    </motion.div>

                    <motion.p variants={childVariants} className="text-white/75 dark:text-white/75 leading-relaxed">
                        I'm a passionate
                        <strong className="text-dark">
                            {" "}Web Designer and Frontend Developer
                        </strong>
                        {" "}who creates modern, responsive, and user-friendly web experiences. I enjoy turning creative ideas into clean, interactive websites while continuously learning new technologies to build high-performance digital solutions.
                    </motion.p>
                    <motion.div variants={childVariants} className='mt-4 flex flex-col md:items-start items-center relative inline-block'>
                        <Button
                            onClick={() => copyEmail("ishamakvane@gmail.com")}
                            variant="light"
                            icon={<FaEnvelope className="me-2" />}
                            iconPosition="left"
                            className='gap-2'
                        >
                            Let's Talk
                        </Button>
                        {copied && (
                            <span
                                className=" absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-950 text-white px-3 py-1 rounded whitespace-nowrap"
                            >
                                Email copied!
                            </span>
                        )}
                    </motion.div>
                </motion.div>
            </div>
            <div className="relative grid grid-cols-3 w-full mt-8 pt-6" ref={statsRef}>
                {/* animated border */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[1px] bg-dark/15 dark:bg-white/15 origin-bottom"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}

                />
                {Data.stats.map((stat, index) => {
                    const { value } = useCountUp({
                        start: 0,
                        end: Number(stat.value),
                        duration: 3,
                        isCounting: isVisible,
                    });
                    return (

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "linear" }}
                            key={stat.title}
                            className={`text-center ${index !== Data.stats.length - 1
                                ? "border-r border-dark/20 dark:border-white/20"
                                : ""
                                }`}
                        >
                            <h3 className="text-2xl sm:text-4xl font-bold text-primary">
                                {value}
                                {stat.suffix}
                            </h3>

                            <p className="text-[10px] sm:text-xs text-dark/60 dark:text-light/60 mt-1 uppercase tracking-wider font-semibold">
                                {stat.title}
                            </p>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
};
