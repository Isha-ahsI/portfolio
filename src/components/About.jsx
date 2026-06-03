import React from 'react';
import { SectionBadge } from './ui/SectionBadge';
import Button from './ui/Button';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import FullAvatar from '../assets/full-avatar.png';
import BorderGlow from './ui/BorderGlow';

export const About = () => {
    return (
        <section id="about" className="relative overflow-hidden max-w-6xl mx-auto py-24 sm:px-6 sm:py-28 px-4">

            {/* Grid Layout */}
            <div className="max-w-5xl mx-auto relative flex md:flex-row items-center md:justify-between justify-center">

                {/* PNG Image */}
                <div className="relative z-20 h-[400px] md:block hidden">
                    <img
                        src={FullAvatar}
                        alt="Isha Makvane"
                        className="w-full h-full object-cover drop-shadow-[0_8px_16px_rgba(var(--color-primary-rgb),0.5)]"
                    />
                </div>

                {/* Content Card */}
                <BorderGlow
                    className="md:z-10 md:absolute md:start-70 rounded-2xl pl-16
            pr-8
            py-10
            bg-dark/5
            dark:bg-white/5
            backdrop-blur-md
            shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.15)]"
                    glowColor="270 100 70"
                    glowIntensity={1.3}
                >

                    <SectionBadge text="About Me" />
                    <h2 className="font-bold text-2xl sm:text-4xl uppercase tracking-wider text-primary mb-4">
                        Get To Know Me!
                    </h2>

                    <p className="text-dark/75 dark:text-white/75 leading-relaxed mb-8">
                        I'm a passionate
                        <strong className="text-primary">
                            {" "}Web Designer and Frontend Developer
                        </strong>
                        {" "}who creates modern, responsive, and user-friendly web experiences. I enjoy turning creative ideas into clean, interactive websites while continuously learning new technologies to build high-performance digital solutions.
                    </p>

                    <Link to="mailto:isha.makvane@gmail.com">
                        <Button
                            variant="primary"
                            icon={<FaEnvelope />}
                            iconPosition="left"
                        >
                            Let's Talk
                        </Button>
                    </Link>

                </BorderGlow>

            </div>
            <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-8 mt-8 pt-6 border-t border-dark/10 dark:border-white/10">
                <div className="text-center sm:text-left flex-1 sm:flex-none">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">2+</h3>
                    <p className="text-[10px] sm:text-xs text-dark/60 dark:text-light/60 mt-1 uppercase tracking-wider font-semibold">Years Exp.</p>
                </div>
                <div className="h-8 w-[1px] bg-dark/20 dark:bg-white/20"></div>
                <div className="text-center sm:text-left flex-1 sm:flex-none">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">15+</h3>
                    <p className="text-[10px] sm:text-xs text-dark/60 dark:text-light/60 mt-1 uppercase tracking-wider font-semibold">Projects</p>
                </div>
                <div className="h-8 w-[1px] bg-dark/20 dark:bg-white/20"></div>
                <div className="text-center sm:text-left flex-1 sm:flex-none">
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">100%</h3>
                    <p className="text-[10px] sm:text-xs text-dark/60 dark:text-light/60 mt-1 uppercase tracking-wider font-semibold">Dedicated</p>
                </div>
            </div>
        </section>
    );
};
